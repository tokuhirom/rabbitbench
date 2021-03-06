[
   {
      "name" : "type: baremetal, queue: lazy-queue, consumers: 0, producers: 1",
      "uri" : "amqp://ben:ben@10.1.73.167:5672",
      "type" : "simple",
      "params" : [
         {
            "consumer-count" : 0,
            "time-limit" : 10,
            "producer-count" : 1,
            "routing-key" : "lazy-queue"
         }
      ]
   },
   {
      "params" : [
         {
            "time-limit" : 10,
            "consumer-count" : 0,
            "producer-count" : 10,
            "routing-key" : "lazy-queue"
         }
      ],
      "type" : "simple",
      "uri" : "amqp://ben:ben@10.1.73.167:5672",
      "name" : "type: baremetal, queue: lazy-queue, consumers: 0, producers: 10"
   },
   {
      "params" : [
         {
            "producer-count" : 1,
            "routing-key" : "lazy-queue",
            "consumer-count" : 10,
            "time-limit" : 10
         }
      ],
      "type" : "simple",
      "uri" : "amqp://ben:ben@10.1.73.167:5672",
      "name" : "type: baremetal, queue: lazy-queue, consumers: 10, producers: 1"
   },
   {
      "type" : "simple",
      "params" : [
         {
            "routing-key" : "lazy-queue",
            "producer-count" : 10,
            "time-limit" : 10,
            "consumer-count" : 10
         }
      ],
      "name" : "type: baremetal, queue: lazy-queue, consumers: 10, producers: 10",
      "uri" : "amqp://ben:ben@10.1.73.167:5672"
   },
   {
      "uri" : "amqp://ben:ben@10.1.73.167:5672",
      "name" : "type: baremetal, queue: normal-queue, consumers: 0, producers: 1",
      "params" : [
         {
            "producer-count" : 1,
            "routing-key" : "normal-queue",
            "consumer-count" : 0,
            "time-limit" : 10
         }
      ],
      "type" : "simple"
   },
   {
      "name" : "type: baremetal, queue: normal-queue, consumers: 0, producers: 10",
      "uri" : "amqp://ben:ben@10.1.73.167:5672",
      "type" : "simple",
      "params" : [
         {
            "producer-count" : 10,
            "routing-key" : "normal-queue",
            "time-limit" : 10,
            "consumer-count" : 0
         }
      ]
   },
   {
      "params" : [
         {
            "consumer-count" : 10,
            "time-limit" : 10,
            "producer-count" : 1,
            "routing-key" : "normal-queue"
         }
      ],
      "type" : "simple",
      "uri" : "amqp://ben:ben@10.1.73.167:5672",
      "name" : "type: baremetal, queue: normal-queue, consumers: 10, producers: 1"
   },
   {
      "params" : [
         {
            "time-limit" : 10,
            "consumer-count" : 10,
            "producer-count" : 10,
            "routing-key" : "normal-queue"
         }
      ],
      "type" : "simple",
      "uri" : "amqp://ben:ben@10.1.73.167:5672",
      "name" : "type: baremetal, queue: normal-queue, consumers: 10, producers: 10"
   },
   {
      "uri" : "amqp://ben:ben@10.3.94.15:5672",
      "name" : "type: vps, queue: lazy-queue, consumers: 0, producers: 1",
      "params" : [
         {
            "consumer-count" : 0,
            "time-limit" : 10,
            "routing-key" : "lazy-queue",
            "producer-count" : 1
         }
      ],
      "type" : "simple"
   },
   {
      "params" : [
         {
            "routing-key" : "lazy-queue",
            "producer-count" : 10,
            "consumer-count" : 0,
            "time-limit" : 10
         }
      ],
      "type" : "simple",
      "uri" : "amqp://ben:ben@10.3.94.15:5672",
      "name" : "type: vps, queue: lazy-queue, consumers: 0, producers: 10"
   },
   {
      "params" : [
         {
            "consumer-count" : 10,
            "time-limit" : 10,
            "routing-key" : "lazy-queue",
            "producer-count" : 1
         }
      ],
      "type" : "simple",
      "uri" : "amqp://ben:ben@10.3.94.15:5672",
      "name" : "type: vps, queue: lazy-queue, consumers: 10, producers: 1"
   },
   {
      "params" : [
         {
            "producer-count" : 10,
            "routing-key" : "lazy-queue",
            "consumer-count" : 10,
            "time-limit" : 10
         }
      ],
      "type" : "simple",
      "uri" : "amqp://ben:ben@10.3.94.15:5672",
      "name" : "type: vps, queue: lazy-queue, consumers: 10, producers: 10"
   },
   {
      "uri" : "amqp://ben:ben@10.3.94.15:5672",
      "name" : "type: vps, queue: normal-queue, consumers: 0, producers: 1",
      "params" : [
         {
            "time-limit" : 10,
            "consumer-count" : 0,
            "routing-key" : "normal-queue",
            "producer-count" : 1
         }
      ],
      "type" : "simple"
   },
   {
      "type" : "simple",
      "params" : [
         {
            "routing-key" : "normal-queue",
            "producer-count" : 10,
            "consumer-count" : 0,
            "time-limit" : 10
         }
      ],
      "name" : "type: vps, queue: normal-queue, consumers: 0, producers: 10",
      "uri" : "amqp://ben:ben@10.3.94.15:5672"
   },
   {
      "name" : "type: vps, queue: normal-queue, consumers: 10, producers: 1",
      "uri" : "amqp://ben:ben@10.3.94.15:5672",
      "type" : "simple",
      "params" : [
         {
            "routing-key" : "normal-queue",
            "producer-count" : 1,
            "time-limit" : 10,
            "consumer-count" : 10
         }
      ]
   },
   {
      "uri" : "amqp://ben:ben@10.3.94.15:5672",
      "name" : "type: vps, queue: normal-queue, consumers: 10, producers: 10",
      "params" : [
         {
            "consumer-count" : 10,
            "time-limit" : 10,
            "routing-key" : "normal-queue",
            "producer-count" : 10
         }
      ],
      "type" : "simple"
   }
]
