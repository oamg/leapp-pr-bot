run:
	@podman build -t leapp-pr-bot .
	@podman run -v ${PWD}:/app:Z leapp-pr-bot bash -c 'cd /app && /app/run.sh'

.PHONY: build
