import { UploadCloud, FileText } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

export function UploadCard() {
  const [drag, setDrag] = useState(false);
  const [uploading, setUploading] = useState(false);

  const uploadFiles = async (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {

    const files = event.target.files;

    if (!files) return;

    setUploading(true);

    for (let file of Array.from(files)) {

      const formData = new FormData();

      formData.append("file", file);

      try {

        const response = await fetch(
          "http://127.0.0.1:8000/api/upload",
          {
            method: "POST",
            body: formData,
          }
        );

        const data = await response.json();

        console.log(data);

      } catch (error) {

        console.error(error);

      }

    }

    setUploading(false);

    alert("Files uploaded successfully!");
  };

  return (
    <div className="glass-card p-6">

      <div className="flex items-center justify-between">

        <div>

          <h3 className="font-display text-lg font-semibold">

            Upload Documents

          </h3>

          <p className="text-sm text-muted-foreground">

            PDF, DOCX, TXT, MD — up to 25MB

          </p>

        </div>

        <FileText className="h-5 w-5 text-muted-foreground" />

      </div>

      <label
        onDragOver={(e) => {
          e.preventDefault();
          setDrag(true);
        }}
        onDragLeave={() => setDrag(false)}
        onDrop={(e) => {
          e.preventDefault();
          setDrag(false);
        }}
        className={cn(
          "group mt-5 flex cursor-pointer flex-col items-center justify-center gap-3 rounded-2xl border border-dashed border-border bg-secondary/30 px-6 py-10 text-center transition-all duration-300 hover:border-primary/60 hover:bg-secondary/50",
          drag && "border-primary/80 bg-primary/10"
        )}
      >

        <div className="grid h-14 w-14 place-items-center rounded-2xl bg-[var(--gradient-primary)] shadow-[var(--shadow-glow)]">

          <UploadCloud className="h-6 w-6 text-primary-foreground" />

        </div>

        <div>

          <p className="font-semibold">

            {uploading
              ? "Uploading..."
              : "Drop files or click to browse"}

          </p>

          <p className="text-xs text-muted-foreground">

            Your workspace AI will index them instantly

          </p>

        </div>

        <input
          type="file"
          multiple
          className="hidden"
          onChange={uploadFiles}
        />

      </label>

    </div>
  );
}