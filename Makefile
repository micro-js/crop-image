#
# Vars
#

BIN = ./node_modules/.bin

#
# Tasks
#

node_modules: package.json
	@npm install

test: $(src) $(tests) node_modules
	@NODE_ENV=development hihat test/*.js -- \
		--debug \
		-p tap-dev-tool

validate: node_modules
	@standard

init:
	@git init
	@git add .
	@git commit -am "FIRST"
	@hub create micro-js/crop-image -d "Crop an image using the browser&#x27;s canvas element"
	@travis enable
	@git push -u origin master

.PHONY: test validate init
