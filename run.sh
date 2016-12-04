#!/bin/bash
perl json-generator.pl
../rabbitmq-perf-test-1.0.1/bin/runjava com.rabbitmq.perf.PerfTestMulti publish-consume-spec.js publish-consume-result.js
