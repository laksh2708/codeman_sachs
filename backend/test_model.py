from services.llm_service import generate_migration


response = generate_migration(
    "Say hello in one sentence."
)

print(response)