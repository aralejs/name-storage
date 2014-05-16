THEME = $(HOME)/.spm/themes/arale

install:
	@spm install

build:
	@spm build
publish:
	@spm publish

build-doc:
	@spm doc build

publish-doc: clean build-doc
	@spm doc publish

watch:
	@spm doc watch

clean:
	@rm -fr _site


runner = _site/tests/runner.html

test:
	@spm test
	@mocha-browser ${runner} -S

output = _site/coverage.html
coverage: build-doc
	@rm -fr _site/src-cov
	@jscoverage --encoding=utf8 src _site/src-cov
	@mocha-browser ${runner}?cov -S -R html-cov > ${output}
	@echo "Build coverage to ${output}"


.PHONY: build-doc publish-doc server clean test coverage
