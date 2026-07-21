from llama_index.core import VectorStoreIndex
from llama_index.core import Document
import os


class LlamaIndexService:

    @staticmethod
    def build_index(project_info):

        documents = []

        for file_path in (
            project_info.documentation_files +
            project_info.config_files
        ):

            with open(
                file_path,
                "r",
                encoding="utf-8",
                errors="ignore"
            ) as f:
                text = f.read()

            documents.append(
                Document(
                    text=text,
                    metadata={
                        "file_name": os.path.basename(file_path),
                        "relative_path": file_path,
                        "type": (
                            "documentation"
                            if file_path in project_info.documentation_files
                            else "configuration"
                                )
                            }
                        )
                    )

        if not documents:
            return None

        index = VectorStoreIndex.from_documents(documents)
        return index