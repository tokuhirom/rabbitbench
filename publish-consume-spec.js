[
   {
      "type" : "simple",
      "uri" : "amqp://ben:ben@10.1.73.167:5672",
      "params" : [
         {
            "routing-key" : "lazy-queue",
            "consumer-count" : 0,
            "producer-count" : 0,
            "time-limit" : 10
         }
      ],
      "name" : "type: baremetal, queue: lazy-queue, consumers: 0, producers: 0"
   },
   {
      "name" : "type: baremetal, queue: lazy-queue, consumers: 0, producers: 10",
      "params" : [
         {
            "time-limit" : 10,
            "routing-key" : "lazy-queue",
            "consumer-count" : 0,
            "producer-count" : 10
         }
      ],
      "type" : "simple",
      "uri" : "amqp://ben:ben@10.1.73.167:5672"
   },
   {
      "name" : "type: baremetal, queue: lazy-queue, consumers: 10, producers: 0",
      "params" : [
         {
            "time-limit" : 10,
            "routing-key" : "lazy-queue",
            "consumer-count" : 10,
            "producer-count" : 0
         }
      ],
      "uri" : "amqp://ben:ben@10.1.73.167:5672",
      "type" : "simple"
   },
   {
      "params" : [
         {
            "time-limit" : 10,
            "producer-count" : 10,
            "consumer-count" : 10,
            "routing-key" : "lazy-queue"
         }
      ],
      "uri" : "amqp://ben:ben@10.1.73.167:5672",
      "type" : "simple",
      "name" : "type: baremetal, queue: lazy-queue, consumers: 10, producers: 10"
   },
   {
      "uri" : "amqp://ben:ben@10.1.73.167:5672",
      "type" : "simple",
      "params" : [
         {
            "time-limit" : 10,
            "routing-key" : "normal-queue",
            "producer-count" : 0,
            "consumer-count" : 0
         }
      ],
      "name" : "type: baremetal, queue: normal-queue, consumers: 0, producers: 0"
   },
   {
      "params" : [
         {
            "producer-count" : 10,
            "consumer-count" : 0,
            "routing-key" : "normal-queue",
            "time-limit" : 10
         }
      ],
      "type" : "simple",
      "uri" : "amqp://ben:ben@10.1.73.167:5672",
      "name" : "type: baremetal, queue: normal-queue, consumers: 0, producers: 10"
   },
   {
      "name" : "type: baremetal, queue: normal-queue, consumers: 10, producers: 0",
      "params" : [
         {
            "time-limit" : 10,
            "consumer-count" : 10,
            "producer-count" : 0,
            "routing-key" : "normal-queue"
         }
      ],
      "type" : "simple",
      "uri" : "amqp://ben:ben@10.1.73.167:5672"
   },
   {
      "name" : "type: baremetal, queue: normal-queue, consumers: 10, producers: 10",
      "type" : "simple",
      "uri" : "amqp://ben:ben@10.1.73.167:5672",
      "params" : [
         {
            "time-limit" : 10,
            "consumer-count" : 10,
            "producer-count" : 10,
            "routing-key" : "normal-queue"
         }
      ]
   }
]
