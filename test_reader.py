from models.document import Document
from modules.file_reader import FileReader

# Path to your resume
file_path = r"D:\15 DAYS INTERSHIP\Amrita RESUME\RESUME.pdf"

# Create a Document object
document = Document(file_path)

# Create a FileReader object
reader = FileReader()

# Extract text from the PDF
reader.extract_text(document)

# Print the extracted text
print(document.text)