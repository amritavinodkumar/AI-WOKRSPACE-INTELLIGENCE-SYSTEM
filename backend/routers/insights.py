from fastapi import APIRouter
import os

router = APIRouter(
    prefix="/api",
    tags=["Insights"]
)

UPLOAD_FOLDER = "uploads"


@router.get("/insights")
def insights():

    files = os.listdir(UPLOAD_FOLDER)

    total = len(files)

    duplicates = len(files) - len(set(files))

    storage = sum(
        os.path.getsize(os.path.join(UPLOAD_FOLDER, f))
        for f in files
    )

    storage_mb = round(storage / (1024 * 1024), 2)

    health = max(100 - duplicates * 10, 0)

    return {

        "workspace_health": health,

        "documents": total,

        "duplicates": duplicates,

        "storage_used": f"{storage_mb} MB",

        "insights": [

            f"{total} document(s) uploaded.",

            f"{duplicates} duplicate file(s) detected.",

            f"Storage usage is {storage_mb} MB.",

            "Workspace is organized."

        ]

    }