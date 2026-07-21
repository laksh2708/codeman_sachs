import os

LANGUAGE_MAP = {
    ".py": "Python",
    ".java": "Java",
    ".js": "JavaScript",
    ".ts": "TypeScript",
    ".go": "Go",
    ".cpp": "C++",
    ".c": "C",
    ".cs": "C#",
    ".php": "PHP",
    ".rb": "Ruby",
    ".swift": "Swift",
    ".kt": "Kotlin",
}

def detect_languages(source_files: list[str]) -> list[str]:
    languages = set()
    for file in source_files:
        extension = os.path.splitext(file)[1]
        if extension in LANGUAGE_MAP:
            languages.add(LANGUAGE_MAP[extension])
    return sorted(languages)