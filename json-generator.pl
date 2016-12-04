use strict;
use warnings;
use JSON::PP;
use autodie;
use File::Path qw/make_path/;

my %type2ip = (
    'baremetal' => '10.1.73.167',
);

make_path('spec');
my @entries;
for my $type (qw(baremetal)) {
    for my $queue (qw(lazy-queue normal-queue)) {
        for my $consumers (0, 10) {
            for my $producers (0, 10) {
                my $ip = $type2ip{$type} or die "Unknown type: $type\n";
                push @entries, {
                    'name' => "type: $type, queue: $queue, consumers: $consumers, producers: $producers",
                    'type' => 'simple',
                    'uri' => "amqp://ben:ben\@${ip}:5672",
                    'params' => [{
                        # https://github.com/rabbitmq/rabbitmq-perf-test/blob/7995c543e39b2dce9e0b784ee0e01ec989f0e722/src/main/java/com/rabbitmq/perf/MulticastParams.java
                        'time-limit' => 10,
                        'producer-count' => 0+$producers,
                        'consumer-count' => 0+$consumers,
                        'routing-key' => $queue,
                    }]};
            }
        }
    }
}

my $coder = JSON::PP->new->ascii->pretty->allow_nonref;
my $json = $coder->encode(\@entries);
my $fname = "publish-consume-spec.js";
open my $fh, '>', $fname;
print {$fh} $json;
close $fh;

