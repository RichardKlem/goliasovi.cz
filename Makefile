.PHONY: help install dev-web dev-studio build-web build-studio deploy-studio upload-photos

# Colors for help text
GREEN := \033[0;32m
NC := \033[0m

help: ## Show this help message
	@echo "Usage: make [target]"
	@echo ""
	@echo "Available targets:"
	@awk 'BEGIN {FS = ":.*?## "} /^[a-zA-Z_-]+:.*?## / {printf "  ${GREEN}%-15s${NC} %s\n", $$1, $$2}' $(MAKEFILE_LIST)

install: ## Install dependencies for both the website and Sanity Studio
	@echo "Installing web dependencies..."
	npm install
	@echo "Installing studio dependencies..."
	cd studio && npm install

dev-web: ## Start the Astro website development server (localhost:4321)
	npm run dev

dev-studio: ## Start the Sanity Studio development server (localhost:3333)
	cd studio && npm run dev

build-web: ## Build the Astro website for production
	npm run build

build-studio: ## Build the Sanity Studio for production
	cd studio && npm run build

deploy-studio: ## Deploy the Sanity Studio to the cloud (sanity.studio)
	cd studio && npm run deploy

upload-photos: ## Run the script to bulk-upload photos to Sanity (requires SANITY_WRITE_TOKEN)
	@if [ -z "$$SANITY_WRITE_TOKEN" ]; then \
		echo "Error: SANITY_WRITE_TOKEN is not set."; \
		echo "Usage: SANITY_WRITE_TOKEN=your_token make upload-photos"; \
		exit 1; \
	fi
	cd studio && node upload-photos.mjs
