from dataclasses import dataclass, field


@dataclass
class ProjectInfo:
    project_name: str
    project_path: str
    source_files: list[str] = field(default_factory=list)
    documentation_files: list[str] = field(default_factory=list)
    config_files: list[str] = field(default_factory=list)
    detected_languages: list[str] = field(default_factory=list)