from fastapi import APIRouter
import os
from datetime import datetime

router = APIRouter(
    prefix="/api",
    tags=["Documents"]
)

UPLOAD_FOLDER = "uploads"


@router.get("/documents")
def get_documents():

    documents = []

    if not os.path.exists(UPLOAD_FOLDER):
        return []

    for filename in os.listdir(UPLOAD_FOLDER):

        filepath = os.path.join(UPLOAD_FOLDER, filename)

        if os.path.isfile(filepath):

            size = round(os.path.getsize(filepath) / 1024, 2)

            uploaded = datetime.fromtimestamp(
                os.path.getmtime(filepath)
            ).strftime("%d-%m-%Y %H:%M")

            extension = filename.split(".")[-1].upper()

            documents.append({

                "filename": filename,
                "type": extension,
                "size": f"{size} KB",
                "uploaded": uploaded,
                "status": "Processed"

            })

    return documents