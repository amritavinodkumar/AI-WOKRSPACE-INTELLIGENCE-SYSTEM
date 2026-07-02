from fastapi import APIRouter
import os

router = APIRouter(
    prefix="/api",
    tags=["Analytics"]
)

UPLOAD_FOLDER = "uploads"


@router.get("/analytics")
def get_analytics():

    total_documents = 0
    total_storage = 0

    pdf = 0
    docx = 0
    txt = 0

    if os.path.exists(UPLOAD_FOLDER):

        for file in os.listdir(UPLOAD_FOLDER):

            path = os.path.join(UPLOAD_FOLDER, file)

            if os.path.isfile(path):

                total_documents += 1

                total_storage += os.path.getsize(path)

                extension = file.split(".")[-1].lower()

                if extension == "pdf":
                    pdf += 1

                elif extension == "docx":
                    docx += 1

                elif extension == "txt":
                    txt += 1

    storage_mb = round(total_storage / (1024 * 1024), 2)

    return {

        "total_documents": total_documents,

        "storage_used": f"{storage_mb} MB",

        "pdf_files": pdf,

        "docx_files": docx,

        "txt_files": txt

    }