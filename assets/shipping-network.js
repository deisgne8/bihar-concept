// Illustrative global maritime network, originating in Jeddah, Saudi Arabia.
// Shared corridors keep ports connected through the same sea passages.
(() => {
  const corridors = {
  "redSouth": [
    [
      38.8,
      21.3
    ],
    [
      40,
      19
    ],
    [
      42.5,
      15
    ],
    [
      43.3,
      12.7
    ],
    [
      44.5,
      12.2
    ],
    [
      47,
      12.4
    ],
    [
      50,
      13
    ],
    [
      54,
      14
    ],
    [
      58,
      14
    ]
  ],
  "redNorth": [
    [
      38.8,
      21.6
    ],
    [
      38,
      22.5
    ],
    [
      36.8,
      24.2
    ],
    [
      35.5,
      25.8
    ],
    [
      34.5,
      27
    ],
    [
      33.8,
      27.6
    ],
    [
      33.65,
      28
    ],
    [
      33.35,
      28.3
    ],
    [
      33.15,
      28.5
    ],
    [
      32.95,
      28.8
    ],
    [
      32.85,
      29
    ],
    [
      32.8,
      29.2
    ],
    [
      32.65,
      29.4
    ],
    [
      32.55,
      29.6
    ],
    [
      32.52,
      29.8
    ],
    [
      32.55,
      29.9
    ]
  ],
  "suez": [
    [
      32.57,
      30.05
    ],
    [
      32.57,
      30.2
    ],
    [
      32.52,
      30.35
    ],
    [
      32.43,
      30.45
    ],
    [
      32.35,
      30.6
    ],
    [
      32.31,
      30.7
    ],
    [
      32.32,
      30.8
    ],
    [
      32.32,
      31.1
    ],
    [
      32.3,
      31.4
    ],
    [
      32.3,
      31.7
    ]
  ],
  "medWest": [
    [
      30,
      32.6
    ],
    [
      25,
      34
    ],
    [
      20,
      35
    ],
    [
      16,
      35
    ],
    [
      13,
      35
    ],
    [
      11.8,
      36
    ],
    [
      11.4,
      37.2
    ],
    [
      10,
      38.3
    ],
    [
      5,
      38
    ],
    [
      -1,
      36.6
    ],
    [
      -4.5,
      36.05
    ],
    [
      -5.3,
      35.97
    ],
    [
      -5.9,
      35.9
    ],
    [
      -7,
      36
    ]
  ],
  "atlanticNorth": [
    [
      -10,
      36.5
    ],
    [
      -11,
      39
    ],
    [
      -11,
      44
    ],
    [
      -7,
      48
    ],
    [
      -4.8,
      49.4
    ],
    [
      -2.5,
      50
    ],
    [
      0,
      50.5
    ],
    [
      1.5,
      51
    ],
    [
      3,
      51.7
    ]
  ],
  "hormuz": [
    [
      59,
      18
    ],
    [
      61,
      22
    ],
    [
      60.5,
      24
    ],
    [
      58.5,
      25
    ],
    [
      57.5,
      25.5
    ],
    [
      56.7,
      26
    ],
    [
      56.35,
      26.6
    ],
    [
      55.5,
      26.5
    ]
  ],
  "indianSouth": [
    [
      65,
      13
    ],
    [
      70,
      9
    ],
    [
      74,
      6
    ],
    [
      77,
      5
    ]
  ],
  "malacca": [
    [
      81,
      5
    ],
    [
      88,
      6
    ],
    [
      94,
      6
    ],
    [
      97,
      6.8
    ],
    [
      98.3,
      5.6
    ],
    [
      99.5,
      4.2
    ],
    [
      100.6,
      3
    ],
    [
      102,
      2.1
    ],
    [
      103.1,
      1.3
    ],
    [
      103.6,
      1.22
    ],
    [
      103.85,
      1.23
    ]
  ],
  "southChina": [
    [
      104.1,
      1.25
    ],
    [
      104.4,
      1.35
    ],
    [
      104.7,
      1.5
    ],
    [
      105.5,
      3
    ],
    [
      108,
      7
    ],
    [
      112,
      12
    ],
    [
      115,
      17
    ]
  ],
  "eastChina": [
    [
      117,
      20
    ],
    [
      118,
      23
    ],
    [
      119.5,
      25
    ],
    [
      121.4,
      26.5
    ],
    [
      123,
      28
    ],
    [
      123.2,
      30
    ]
  ],
  "africaEast": [
    [
      49,
      12.4
    ],
    [
      51.8,
      12.5
    ],
    [
      53,
      11
    ],
    [
      53,
      8
    ],
    [
      51,
      2
    ],
    [
      47,
      -5
    ],
    [
      44,
      -10
    ],
    [
      43,
      -16
    ],
    [
      42,
      -23
    ],
    [
      37,
      -30
    ],
    [
      30,
      -35
    ],
    [
      23,
      -36
    ]
  ],
  "cape": [
    [
      19,
      -35
    ],
    [
      17.5,
      -34.5
    ],
    [
      17.8,
      -33.9
    ]
  ],
  "dardanelles": [
    [
      29,
      33
    ],
    [
      26.5,
      34.5
    ],
    [
      23,
      34.5
    ],
    [
      22.8,
      35.5
    ],
    [
      23.2,
      36
    ],
    [
      23.8,
      36.5
    ],
    [
      25.5,
      37.7
    ],
    [
      25.5,
      38.2
    ],
    [
      25,
      38.7
    ],
    [
      25.7,
      39.5
    ],
    [
      26,
      39.9
    ],
    [
      26.2,
      40.05
    ],
    [
      26.4,
      40.16
    ],
    [
      26.55,
      40.35
    ],
    [
      26.75,
      40.45
    ],
    [
      27.2,
      40.55
    ],
    [
      28,
      40.65
    ],
    [
      28.8,
      40.9
    ]
  ],
  "bosphorus": [
    [
      28.98,
      41
    ],
    [
      29.02,
      41.04
    ],
    [
      29.055,
      41.08
    ],
    [
      29.075,
      41.12
    ],
    [
      29.07,
      41.16
    ],
    [
      29.12,
      41.2
    ],
    [
      29.16,
      41.24
    ],
    [
      29.2,
      41.3
    ],
    [
      29.3,
      41.5
    ]
  ],
  "atlanticAmerica": [
    [
      -15,
      34
    ],
    [
      -30,
      27
    ],
    [
      -45,
      20
    ],
    [
      -60,
      16
    ],
    [
      -67,
      15
    ],
    [
      -73,
      13
    ],
    [
      -77,
      12
    ],
    [
      -79.5,
      10
    ],
    [
      -79.92,
      9.4
    ]
  ],
  "panama": [
    [
      -79.92,
      9.27
    ],
    [
      -79.92,
      9.21
    ],
    [
      -79.87,
      9.18
    ],
    [
      -79.81,
      9.16
    ],
    [
      -79.77,
      9.11
    ],
    [
      -79.72,
      9.12
    ],
    [
      -79.68,
      9.1
    ],
    [
      -79.65,
      9.05
    ],
    [
      -79.62,
      9.02
    ],
    [
      -79.6,
      9
    ],
    [
      -79.59,
      8.96
    ],
    [
      -79.57,
      8.92
    ],
    [
      -79.55,
      8.85
    ]
  ]
};
  const ports = [
  {
    "name": "Dammam, Saudi Arabia",
    "country": "Saudi Arabia",
    "port": "Dammam",
    "lon": 50.2,
    "lat": 26.5,
    "passages": [
      "Bab el-Mandeb Strait",
      "Strait of Hormuz"
    ],
    "corridors": [
      "redSouth",
      "hormuz"
    ],
    "approach": [
      [
        54,
        26
      ],
      [
        52,
        26.5
      ],
      [
        51,
        27
      ],
      [
        50.5,
        26.8
      ]
    ]
  },
  {
    "name": "Jebel Ali, UAE",
    "country": "UAE",
    "port": "Jebel Ali",
    "lon": 55.02,
    "lat": 24.98,
    "passages": [
      "Bab el-Mandeb Strait",
      "Strait of Hormuz"
    ],
    "corridors": [
      "redSouth",
      "hormuz"
    ],
    "approach": [
      [
        54.8,
        25.9
      ],
      [
        54.8,
        25.3
      ]
    ]
  },
  {
    "name": "Hamad, Qatar",
    "country": "Qatar",
    "port": "Hamad",
    "lon": 51.62,
    "lat": 24.98,
    "passages": [
      "Bab el-Mandeb Strait",
      "Strait of Hormuz"
    ],
    "corridors": [
      "redSouth",
      "hormuz"
    ],
    "approach": [
      [
        53,
        26
      ],
      [
        52,
        25.3
      ]
    ]
  },
  {
    "name": "Khalifa Bin Salman, Bahrain",
    "country": "Bahrain",
    "port": "Khalifa Bin Salman",
    "lon": 50.73,
    "lat": 26.2,
    "passages": [
      "Bab el-Mandeb Strait",
      "Strait of Hormuz"
    ],
    "corridors": [
      "redSouth",
      "hormuz"
    ],
    "approach": [
      [
        54,
        26
      ],
      [
        52,
        26.5
      ],
      [
        51.5,
        27
      ],
      [
        50.9,
        26.5
      ]
    ]
  },
  {
    "name": "Shuwaikh, Kuwait",
    "country": "Kuwait",
    "port": "Shuwaikh",
    "lon": 47.92,
    "lat": 29.35,
    "passages": [
      "Bab el-Mandeb Strait",
      "Strait of Hormuz"
    ],
    "corridors": [
      "redSouth",
      "hormuz"
    ],
    "approach": [
      [
        54,
        26
      ],
      [
        52,
        26.5
      ],
      [
        51,
        28
      ],
      [
        49.5,
        29
      ],
      [
        48.3,
        29.5
      ]
    ]
  },
  {
    "name": "Sohar, Oman",
    "country": "Oman",
    "port": "Sohar",
    "lon": 56.73,
    "lat": 24.5,
    "passages": [
      "Bab el-Mandeb Strait"
    ],
    "corridors": [
      "redSouth"
    ],
    "approach": [
      [
        59,
        18
      ],
      [
        61,
        22
      ],
      [
        60.5,
        24
      ],
      [
        58.5,
        25
      ],
      [
        57.5,
        24.8
      ]
    ]
  },
  {
    "name": "Karachi, Pakistan",
    "country": "Pakistan",
    "port": "Karachi",
    "lon": 66.98,
    "lat": 24.75,
    "passages": [
      "Bab el-Mandeb Strait"
    ],
    "corridors": [
      "redSouth"
    ],
    "approach": [
      [
        61,
        19
      ],
      [
        64,
        23
      ],
      [
        66.5,
        24.5
      ]
    ]
  },
  {
    "name": "Mumbai, India",
    "country": "India",
    "port": "Mumbai",
    "lon": 72.8,
    "lat": 18.9,
    "passages": [
      "Bab el-Mandeb Strait"
    ],
    "coast": "west",
    "corridors": [
      "redSouth"
    ],
    "approach": [
      [
        64,
        18
      ],
      [
        70,
        19
      ]
    ]
  },
  {
    "name": "Chennai, India",
    "country": "India",
    "port": "Chennai",
    "lon": 80.35,
    "lat": 13.1,
    "passages": [
      "Bab el-Mandeb Strait"
    ],
    "coast": "east",
    "corridors": [
      "redSouth",
      "indianSouth"
    ],
    "approach": [
      [
        81,
        5
      ],
      [
        83,
        7
      ],
      [
        83,
        10
      ],
      [
        81.5,
        12.5
      ]
    ]
  },
  {
    "name": "Colombo, Sri Lanka",
    "country": "Sri Lanka",
    "port": "Colombo",
    "lon": 79.8,
    "lat": 6.9,
    "passages": [
      "Bab el-Mandeb Strait"
    ],
    "corridors": [
      "redSouth",
      "indianSouth"
    ],
    "approach": [
      [
        79,
        5.7
      ],
      [
        79.6,
        6.3
      ]
    ]
  },
  {
    "name": "Chattogram, Bangladesh",
    "country": "Bangladesh",
    "port": "Chattogram",
    "lon": 91.75,
    "lat": 22.2,
    "passages": [
      "Bab el-Mandeb Strait"
    ],
    "corridors": [
      "redSouth",
      "indianSouth"
    ],
    "approach": [
      [
        81,
        5
      ],
      [
        85,
        8
      ],
      [
        88,
        13
      ],
      [
        90,
        18
      ],
      [
        91.5,
        21
      ]
    ]
  },
  {
    "name": "Shanghai, China",
    "country": "China",
    "port": "Shanghai",
    "lon": 122.2,
    "lat": 31.3,
    "passages": [
      "Bab el-Mandeb Strait",
      "Strait of Malacca"
    ],
    "corridors": [
      "redSouth",
      "indianSouth",
      "malacca",
      "southChina",
      "eastChina"
    ],
    "approach": []
  },
  {
    "name": "Yokohama, Japan",
    "country": "Japan",
    "port": "Yokohama",
    "lon": 139.7,
    "lat": 35.4,
    "passages": [
      "Bab el-Mandeb Strait",
      "Strait of Malacca"
    ],
    "corridors": [
      "redSouth",
      "indianSouth",
      "malacca",
      "southChina",
      "eastChina"
    ],
    "approach": [
      [
        127,
        29
      ],
      [
        132,
        29
      ],
      [
        136,
        31
      ],
      [
        138,
        33.5
      ],
      [
        139.78,
        34.9
      ],
      [
        139.77,
        35.1
      ],
      [
        139.77,
        35.3
      ]
    ]
  },
  {
    "name": "Busan, South Korea",
    "country": "South Korea",
    "port": "Busan",
    "lon": 129.1,
    "lat": 35.05,
    "passages": [
      "Bab el-Mandeb Strait",
      "Strait of Malacca"
    ],
    "corridors": [
      "redSouth",
      "indianSouth",
      "malacca",
      "southChina",
      "eastChina"
    ],
    "approach": [
      [
        125,
        31.5
      ],
      [
        127.5,
        33
      ],
      [
        129,
        34
      ]
    ]
  },
  {
    "name": "Kaohsiung, Taiwan",
    "country": "Taiwan",
    "port": "Kaohsiung",
    "lon": 120.25,
    "lat": 22.55,
    "passages": [
      "Bab el-Mandeb Strait",
      "Strait of Malacca"
    ],
    "corridors": [
      "redSouth",
      "indianSouth",
      "malacca",
      "southChina"
    ],
    "approach": [
      [
        117,
        20
      ],
      [
        119,
        21.5
      ],
      [
        120,
        22
      ]
    ]
  },
  {
    "name": "Cai Mep, Vietnam",
    "country": "Vietnam",
    "port": "Cai Mep",
    "lon": 107.05,
    "lat": 10.45,
    "passages": [
      "Bab el-Mandeb Strait",
      "Strait of Malacca"
    ],
    "corridors": [
      "redSouth",
      "indianSouth",
      "malacca"
    ],
    "approach": [
      [
        104.1,
        1.25
      ],
      [
        104.4,
        1.35
      ],
      [
        105.5,
        3
      ],
      [
        108,
        7
      ],
      [
        108,
        9
      ],
      [
        107.3,
        10
      ]
    ]
  },
  {
    "name": "Laem Chabang, Thailand",
    "country": "Thailand",
    "port": "Laem Chabang",
    "lon": 100.85,
    "lat": 13.05,
    "passages": [
      "Bab el-Mandeb Strait",
      "Strait of Malacca"
    ],
    "corridors": [
      "redSouth",
      "indianSouth",
      "malacca"
    ],
    "approach": [
      [
        104.1,
        1.25
      ],
      [
        104.4,
        1.35
      ],
      [
        105.5,
        3
      ],
      [
        105,
        6
      ],
      [
        103,
        8
      ],
      [
        101.5,
        10
      ],
      [
        100.8,
        12
      ]
    ]
  },
  {
    "name": "Port Klang, Malaysia",
    "country": "Malaysia",
    "port": "Port Klang",
    "lon": 101.3,
    "lat": 2.9,
    "passages": [
      "Bab el-Mandeb Strait",
      "Strait of Malacca"
    ],
    "corridors": [
      "redSouth",
      "indianSouth"
    ],
    "approach": [
      [
        81,
        5
      ],
      [
        88,
        6
      ],
      [
        94,
        6
      ],
      [
        97,
        6.8
      ],
      [
        98.3,
        5.6
      ],
      [
        99.5,
        4.2
      ],
      [
        100.6,
        3
      ],
      [
        101,
        2.8
      ]
    ]
  },
  {
    "name": "Jakarta, Indonesia",
    "country": "Indonesia",
    "port": "Jakarta",
    "lon": 106.85,
    "lat": -6.05,
    "passages": [
      "Bab el-Mandeb Strait",
      "Strait of Malacca"
    ],
    "corridors": [
      "redSouth",
      "indianSouth",
      "malacca"
    ],
    "approach": [
      [
        104.1,
        1.25
      ],
      [
        104.4,
        1.35
      ],
      [
        106.4,
        1
      ],
      [
        108.5,
        0
      ],
      [
        108.2,
        -2
      ],
      [
        109,
        -4
      ],
      [
        107,
        -5.5
      ]
    ]
  },
  {
    "name": "Singapore",
    "country": "Singapore",
    "port": "Singapore",
    "lon": 103.85,
    "lat": 1.23,
    "passages": [
      "Bab el-Mandeb Strait",
      "Strait of Malacca"
    ],
    "corridors": [
      "redSouth",
      "indianSouth",
      "malacca"
    ],
    "approach": []
  },
  {
    "name": "Manila, Philippines",
    "country": "Philippines",
    "port": "Manila",
    "lon": 120.75,
    "lat": 14.4,
    "passages": [
      "Bab el-Mandeb Strait",
      "Strait of Malacca"
    ],
    "corridors": [
      "redSouth",
      "indianSouth",
      "malacca",
      "southChina"
    ],
    "approach": [
      [
        117,
        15
      ],
      [
        119,
        15
      ],
      [
        120,
        14.6
      ]
    ]
  },
  {
    "name": "Hong Kong",
    "country": "Hong Kong",
    "port": "Hong Kong",
    "lon": 114.2,
    "lat": 22.2,
    "passages": [
      "Bab el-Mandeb Strait",
      "Strait of Malacca"
    ],
    "corridors": [
      "redSouth",
      "indianSouth",
      "malacca",
      "southChina"
    ],
    "approach": [
      [
        114.5,
        20
      ]
    ]
  },
  {
    "name": "Fremantle, Australia",
    "country": "Australia",
    "port": "Fremantle",
    "lon": 115.65,
    "lat": -32.05,
    "passages": [
      "Bab el-Mandeb Strait"
    ],
    "coast": "west",
    "corridors": [
      "redSouth",
      "indianSouth"
    ],
    "approach": [
      [
        85,
        -4
      ],
      [
        95,
        -16
      ],
      [
        106,
        -28
      ],
      [
        114,
        -33
      ]
    ]
  },
  {
    "name": "Sydney, Australia",
    "country": "Australia",
    "port": "Sydney",
    "lon": 151.3,
    "lat": -33.85,
    "passages": [
      "Bab el-Mandeb Strait"
    ],
    "coast": "east",
    "corridors": [
      "redSouth",
      "indianSouth"
    ],
    "approach": [
      [
        85,
        -5
      ],
      [
        95,
        -20
      ],
      [
        108,
        -35
      ],
      [
        120,
        -40
      ],
      [
        135,
        -42
      ],
      [
        142,
        -39.4
      ],
      [
        145,
        -39.4
      ],
      [
        147,
        -39.5
      ],
      [
        151,
        -39
      ],
      [
        154,
        -38
      ],
      [
        154,
        -35
      ],
      [
        152,
        -34
      ]
    ]
  },
  {
    "name": "Auckland, New Zealand",
    "country": "New Zealand",
    "port": "Auckland",
    "lon": 174.85,
    "lat": -36.8,
    "passages": [
      "Bab el-Mandeb Strait"
    ],
    "corridors": [
      "redSouth",
      "indianSouth"
    ],
    "approach": [
      [
        85,
        -5
      ],
      [
        95,
        -20
      ],
      [
        108,
        -35
      ],
      [
        120,
        -40
      ],
      [
        135,
        -42
      ],
      [
        142,
        -39.4
      ],
      [
        145,
        -39.4
      ],
      [
        147,
        -39.5
      ],
      [
        151,
        -39
      ],
      [
        154,
        -38
      ],
      [
        162,
        -37
      ],
      [
        170,
        -36
      ],
      [
        173,
        -34
      ],
      [
        175,
        -35
      ]
    ]
  },
  {
    "name": "Port Moresby, Papua New Guinea",
    "country": "Papua New Guinea",
    "port": "Port Moresby",
    "lon": 147.1,
    "lat": -9.5,
    "passages": [
      "Bab el-Mandeb Strait",
      "Strait of Malacca"
    ],
    "corridors": [
      "redSouth",
      "indianSouth",
      "malacca",
      "southChina"
    ],
    "approach": [
      [
        117,
        18
      ],
      [
        121,
        20
      ],
      [
        126,
        20
      ],
      [
        131,
        15
      ],
      [
        135,
        7
      ],
      [
        140,
        2
      ],
      [
        145,
        1
      ],
      [
        151,
        0
      ],
      [
        154,
        -4
      ],
      [
        155,
        -8
      ],
      [
        155,
        -12
      ],
      [
        149,
        -12
      ],
      [
        147.5,
        -10.5
      ]
    ]
  },
  {
    "name": "Algeciras, Spain",
    "country": "Spain",
    "port": "Algeciras",
    "lon": -5.4,
    "lat": 36.1,
    "passages": [
      "Suez Canal",
      "Strait of Gibraltar"
    ],
    "corridors": [
      "redNorth",
      "suez"
    ],
    "approach": [
      [
        30,
        32.6
      ],
      [
        25,
        34
      ],
      [
        20,
        35
      ],
      [
        16,
        35
      ],
      [
        13,
        35
      ],
      [
        11.8,
        36
      ],
      [
        11.4,
        37.2
      ],
      [
        10,
        38.3
      ],
      [
        5,
        38
      ],
      [
        -1,
        36.6
      ],
      [
        -4.5,
        36.05
      ],
      [
        -5.3,
        35.97
      ],
      [
        -5.5,
        35.93
      ]
    ]
  },
  {
    "name": "Sines, Portugal",
    "country": "Portugal",
    "port": "Sines",
    "lon": -8.9,
    "lat": 37.95,
    "passages": [
      "Suez Canal",
      "Strait of Gibraltar"
    ],
    "corridors": [
      "redNorth",
      "suez",
      "medWest"
    ],
    "approach": [
      [
        -10,
        36.5
      ],
      [
        -10,
        38
      ]
    ]
  },
  {
    "name": "Gibraltar",
    "country": "Gibraltar",
    "port": "Gibraltar",
    "lon": -5.36,
    "lat": 36.12,
    "passages": [
      "Suez Canal",
      "Strait of Gibraltar"
    ],
    "corridors": [
      "redNorth",
      "suez"
    ],
    "approach": [
      [
        30,
        32.6
      ],
      [
        25,
        34
      ],
      [
        20,
        35
      ],
      [
        16,
        35
      ],
      [
        13,
        35
      ],
      [
        11.8,
        36
      ],
      [
        11.4,
        37.2
      ],
      [
        10,
        38.3
      ],
      [
        5,
        38
      ],
      [
        -1,
        36.6
      ],
      [
        -4.5,
        36.05
      ],
      [
        -5.3,
        35.97
      ],
      [
        -5.4,
        35.94
      ]
    ]
  },
  {
    "name": "Southampton, United Kingdom",
    "country": "United Kingdom",
    "port": "Southampton",
    "lon": -1.25,
    "lat": 50.7,
    "passages": [
      "Suez Canal",
      "Strait of Gibraltar"
    ],
    "corridors": [
      "redNorth",
      "suez",
      "medWest"
    ],
    "approach": [
      [
        -10,
        36.5
      ],
      [
        -11,
        39
      ],
      [
        -11,
        44
      ],
      [
        -7,
        48
      ],
      [
        -4.8,
        49.4
      ],
      [
        -2.5,
        50
      ],
      [
        -1.5,
        50.4
      ]
    ]
  },
  {
    "name": "Piraeus, Greece",
    "country": "Greece",
    "port": "Piraeus",
    "lon": 23.6,
    "lat": 37.9,
    "passages": [
      "Suez Canal"
    ],
    "corridors": [
      "redNorth",
      "suez"
    ],
    "approach": [
      [
        29,
        33
      ],
      [
        26.5,
        34.5
      ],
      [
        23,
        34.5
      ],
      [
        22.8,
        35.5
      ],
      [
        23.2,
        36
      ],
      [
        23.8,
        36.5
      ],
      [
        23.8,
        37.3
      ]
    ]
  },
  {
    "name": "Genoa, Italy",
    "country": "Italy",
    "port": "Genoa",
    "lon": 8.9,
    "lat": 44.35,
    "passages": [
      "Suez Canal"
    ],
    "corridors": [
      "redNorth",
      "suez"
    ],
    "approach": [
      [
        25,
        34
      ],
      [
        20,
        35
      ],
      [
        16,
        35
      ],
      [
        13,
        35
      ],
      [
        11.8,
        36
      ],
      [
        11.4,
        37.2
      ],
      [
        10,
        38.3
      ],
      [
        10,
        40
      ],
      [
        10.2,
        42.7
      ],
      [
        9,
        43.7
      ]
    ]
  },
  {
    "name": "Aarhus, Denmark",
    "country": "Denmark",
    "port": "Aarhus",
    "lon": 10.25,
    "lat": 56.1,
    "passages": [
      "Suez Canal",
      "Strait of Gibraltar"
    ],
    "corridors": [
      "redNorth",
      "suez",
      "medWest",
      "atlanticNorth"
    ],
    "approach": [
      [
        4,
        54
      ],
      [
        7,
        56
      ],
      [
        8,
        58
      ],
      [
        10,
        58
      ],
      [
        11.5,
        57.5
      ],
      [
        11.5,
        56.1
      ],
      [
        10.6,
        56.1
      ]
    ]
  },
  {
    "name": "Antwerp, Belgium",
    "country": "Belgium",
    "port": "Antwerp",
    "lon": 4.25,
    "lat": 51.35,
    "passages": [
      "Suez Canal",
      "Strait of Gibraltar"
    ],
    "corridors": [
      "redNorth",
      "suez",
      "medWest",
      "atlanticNorth"
    ],
    "approach": [
      [
        3.2,
        51.5
      ],
      [
        3.7,
        51.4
      ],
      [
        4.1,
        51.35
      ]
    ]
  },
  {
    "name": "Hamburg, Germany",
    "country": "Germany",
    "port": "Hamburg",
    "lon": 9.9,
    "lat": 53.55,
    "passages": [
      "Suez Canal",
      "Strait of Gibraltar"
    ],
    "corridors": [
      "redNorth",
      "suez",
      "medWest",
      "atlanticNorth"
    ],
    "approach": [
      [
        4,
        54
      ],
      [
        6,
        54.5
      ],
      [
        8,
        54.2
      ],
      [
        8.7,
        53.9
      ],
      [
        9.2,
        53.7
      ]
    ]
  },
  {
    "name": "Rotterdam, Netherlands",
    "country": "Netherlands",
    "port": "Rotterdam",
    "lon": 4.1,
    "lat": 52,
    "passages": [
      "Suez Canal",
      "Strait of Gibraltar"
    ],
    "corridors": [
      "redNorth",
      "suez",
      "medWest",
      "atlanticNorth"
    ],
    "approach": []
  },
  {
    "name": "Marseille, France",
    "country": "France",
    "port": "Marseille",
    "lon": 5.25,
    "lat": 43.25,
    "passages": [
      "Suez Canal"
    ],
    "corridors": [
      "redNorth",
      "suez"
    ],
    "approach": [
      [
        25,
        34
      ],
      [
        20,
        35
      ],
      [
        16,
        35
      ],
      [
        13,
        35
      ],
      [
        11.8,
        36
      ],
      [
        11.4,
        37.2
      ],
      [
        10,
        38.3
      ],
      [
        10,
        38
      ],
      [
        8,
        38
      ],
      [
        6,
        40
      ],
      [
        5,
        42.5
      ]
    ]
  },
  {
    "name": "Gothenburg, Sweden",
    "country": "Sweden",
    "port": "Gothenburg",
    "lon": 11.75,
    "lat": 57.65,
    "passages": [
      "Suez Canal",
      "Strait of Gibraltar"
    ],
    "corridors": [
      "redNorth",
      "suez",
      "medWest",
      "atlanticNorth"
    ],
    "approach": [
      [
        4,
        54
      ],
      [
        7,
        56
      ],
      [
        8,
        58
      ],
      [
        10,
        58
      ]
    ]
  },
  {
    "name": "Marsaxlokk, Malta",
    "country": "Malta",
    "port": "Marsaxlokk",
    "lon": 14.55,
    "lat": 35.8,
    "passages": [
      "Suez Canal"
    ],
    "corridors": [
      "redNorth",
      "suez"
    ],
    "approach": [
      [
        25,
        34
      ],
      [
        20,
        35
      ],
      [
        16,
        35
      ],
      [
        15,
        35.5
      ]
    ]
  },
  {
    "name": "Limassol, Cyprus",
    "country": "Cyprus",
    "port": "Limassol",
    "lon": 33,
    "lat": 34.6,
    "passages": [
      "Suez Canal"
    ],
    "corridors": [
      "redNorth",
      "suez"
    ],
    "approach": [
      [
        32.5,
        32.5
      ],
      [
        32.8,
        34
      ]
    ]
  },
  {
    "name": "Istanbul, Turkey",
    "country": "Turkey",
    "port": "Istanbul",
    "lon": 28.95,
    "lat": 40.98,
    "passages": [
      "Suez Canal",
      "Dardanelles Strait"
    ],
    "corridors": [
      "redNorth",
      "suez",
      "dardanelles"
    ],
    "approach": []
  },
  {
    "name": "Constanta, Romania",
    "country": "Romania",
    "port": "Constanta",
    "lon": 28.7,
    "lat": 44.1,
    "passages": [
      "Suez Canal",
      "Dardanelles Strait",
      "Bosphorus Strait"
    ],
    "corridors": [
      "redNorth",
      "suez",
      "dardanelles",
      "bosphorus"
    ],
    "approach": [
      [
        29.5,
        42.5
      ],
      [
        29,
        43.5
      ]
    ]
  },
  {
    "name": "Port Said, Egypt",
    "country": "Egypt",
    "port": "Port Said",
    "lon": 32.3,
    "lat": 31.4,
    "passages": [
      "Suez Canal"
    ],
    "corridors": [
      "redNorth"
    ],
    "approach": [
      [
        32.57,
        30.05
      ],
      [
        32.57,
        30.2
      ],
      [
        32.52,
        30.35
      ],
      [
        32.43,
        30.45
      ],
      [
        32.35,
        30.6
      ],
      [
        32.31,
        30.7
      ],
      [
        32.32,
        30.8
      ],
      [
        32.32,
        31.1
      ],
      [
        32.3,
        31.4
      ]
    ]
  },
  {
    "name": "Mombasa, Kenya",
    "country": "Kenya",
    "port": "Mombasa",
    "lon": 39.75,
    "lat": -4.1,
    "passages": [
      "Bab el-Mandeb Strait"
    ],
    "corridors": [],
    "approach": [
      [
        38.8,
        21.3
      ],
      [
        40,
        19
      ],
      [
        42.5,
        15
      ],
      [
        43.3,
        12.7
      ],
      [
        44.5,
        12.2
      ],
      [
        47,
        12.4
      ],
      [
        49,
        12.4
      ],
      [
        51.8,
        12.5
      ],
      [
        53,
        11
      ],
      [
        53,
        8
      ],
      [
        51,
        2
      ],
      [
        47,
        -1
      ],
      [
        43,
        -3
      ],
      [
        41,
        -4
      ],
      [
        40,
        -4
      ]
    ]
  },
  {
    "name": "Maputo, Mozambique",
    "country": "Mozambique",
    "port": "Maputo",
    "lon": 32.9,
    "lat": -26.1,
    "passages": [
      "Bab el-Mandeb Strait"
    ],
    "corridors": [],
    "approach": [
      [
        38.8,
        21.3
      ],
      [
        40,
        19
      ],
      [
        42.5,
        15
      ],
      [
        43.3,
        12.7
      ],
      [
        44.5,
        12.2
      ],
      [
        47,
        12.4
      ],
      [
        49,
        12.4
      ],
      [
        51.8,
        12.5
      ],
      [
        53,
        11
      ],
      [
        53,
        8
      ],
      [
        51,
        2
      ],
      [
        47,
        -5
      ],
      [
        44,
        -10
      ],
      [
        43,
        -16
      ],
      [
        42,
        -23
      ],
      [
        39,
        -24
      ],
      [
        35,
        -26
      ],
      [
        33.5,
        -26.3
      ]
    ]
  },
  {
    "name": "Cape Town, South Africa",
    "country": "South Africa",
    "port": "Cape Town",
    "lon": 18.4,
    "lat": -33.9,
    "passages": [
      "Bab el-Mandeb Strait",
      "Cape of Good Hope"
    ],
    "corridors": [],
    "approach": [
      [
        38.8,
        21.3
      ],
      [
        40,
        19
      ],
      [
        42.5,
        15
      ],
      [
        43.3,
        12.7
      ],
      [
        44.5,
        12.2
      ],
      [
        47,
        12.4
      ],
      [
        49,
        12.4
      ],
      [
        51.8,
        12.5
      ],
      [
        53,
        11
      ],
      [
        53,
        8
      ],
      [
        51,
        2
      ],
      [
        47,
        -5
      ],
      [
        44,
        -10
      ],
      [
        43,
        -16
      ],
      [
        42,
        -23
      ],
      [
        37,
        -30
      ],
      [
        30,
        -35
      ],
      [
        23,
        -36
      ],
      [
        19,
        -35
      ],
      [
        17.5,
        -34.5
      ],
      [
        17.8,
        -33.9
      ]
    ]
  },
  {
    "name": "Djibouti",
    "country": "Djibouti",
    "port": "Djibouti",
    "lon": 43.2,
    "lat": 11.65,
    "passages": [
      "Bab el-Mandeb Strait"
    ],
    "corridors": [],
    "approach": [
      [
        38.8,
        21.3
      ],
      [
        40,
        19
      ],
      [
        42.5,
        15
      ],
      [
        43.3,
        12.7
      ],
      [
        43.6,
        12
      ],
      [
        43.5,
        11.8
      ]
    ]
  },
  {
    "name": "Dar es Salaam, Tanzania",
    "country": "Tanzania",
    "port": "Dar es Salaam",
    "lon": 39.4,
    "lat": -6.8,
    "passages": [
      "Bab el-Mandeb Strait"
    ],
    "corridors": [],
    "approach": [
      [
        38.8,
        21.3
      ],
      [
        40,
        19
      ],
      [
        42.5,
        15
      ],
      [
        43.3,
        12.7
      ],
      [
        44.5,
        12.2
      ],
      [
        47,
        12.4
      ],
      [
        49,
        12.4
      ],
      [
        51.8,
        12.5
      ],
      [
        53,
        11
      ],
      [
        53,
        8
      ],
      [
        51,
        2
      ],
      [
        47,
        -2
      ],
      [
        44,
        -5
      ],
      [
        41,
        -6.5
      ],
      [
        40,
        -6.5
      ]
    ]
  },
  {
    "name": "Algiers, Algeria",
    "country": "Algeria",
    "port": "Algiers",
    "lon": 3.1,
    "lat": 36.85,
    "passages": [
      "Suez Canal"
    ],
    "corridors": [
      "redNorth",
      "suez"
    ],
    "approach": [
      [
        25,
        34
      ],
      [
        20,
        35
      ],
      [
        16,
        35
      ],
      [
        13,
        35
      ],
      [
        11.8,
        36
      ],
      [
        11.4,
        37.2
      ],
      [
        10,
        38.3
      ],
      [
        6,
        38
      ],
      [
        3.1,
        37.5
      ]
    ]
  },
  {
    "name": "Tripoli, Libya",
    "country": "Libya",
    "port": "Tripoli",
    "lon": 13.2,
    "lat": 32.95,
    "passages": [
      "Suez Canal"
    ],
    "corridors": [
      "redNorth",
      "suez"
    ],
    "approach": [
      [
        25,
        34
      ],
      [
        20,
        35
      ],
      [
        16,
        35
      ],
      [
        13.5,
        34
      ]
    ]
  },
  {
    "name": "Tangier, Morocco",
    "country": "Morocco",
    "port": "Tangier",
    "lon": -5.75,
    "lat": 35.85,
    "passages": [
      "Suez Canal",
      "Strait of Gibraltar"
    ],
    "corridors": [
      "redNorth",
      "suez"
    ],
    "approach": [
      [
        30,
        32.6
      ],
      [
        25,
        34
      ],
      [
        20,
        35
      ],
      [
        16,
        35
      ],
      [
        13,
        35
      ],
      [
        11.8,
        36
      ],
      [
        11.4,
        37.2
      ],
      [
        10,
        38.3
      ],
      [
        5,
        38
      ],
      [
        -1,
        36.6
      ],
      [
        -4.5,
        36.05
      ],
      [
        -5.3,
        35.97
      ],
      [
        -5.9,
        35.9
      ],
      [
        -6.1,
        35.95
      ]
    ]
  },
  {
    "name": "Toamasina, Madagascar",
    "country": "Madagascar",
    "port": "Toamasina",
    "lon": 49.5,
    "lat": -18.15,
    "passages": [
      "Bab el-Mandeb Strait"
    ],
    "corridors": [],
    "approach": [
      [
        38.8,
        21.3
      ],
      [
        40,
        19
      ],
      [
        42.5,
        15
      ],
      [
        43.3,
        12.7
      ],
      [
        44.5,
        12.2
      ],
      [
        47,
        12.4
      ],
      [
        49,
        12.4
      ],
      [
        51.8,
        12.5
      ],
      [
        53,
        11
      ],
      [
        53,
        8
      ],
      [
        54,
        2
      ],
      [
        54,
        -8
      ],
      [
        52,
        -16
      ],
      [
        50,
        -18
      ]
    ]
  },
  {
    "name": "New York, United States",
    "country": "United States",
    "port": "New York",
    "lon": -74,
    "lat": 40.5,
    "passages": [
      "Suez Canal",
      "Strait of Gibraltar"
    ],
    "coast": "east",
    "corridors": [
      "redNorth",
      "suez",
      "medWest"
    ],
    "approach": [
      [
        -15,
        37
      ],
      [
        -30,
        39
      ],
      [
        -50,
        40
      ],
      [
        -65,
        39
      ],
      [
        -72.5,
        39.5
      ],
      [
        -73.8,
        40.3
      ]
    ]
  },
  {
    "name": "Los Angeles, United States",
    "country": "United States",
    "port": "Los Angeles",
    "lon": -118.25,
    "lat": 33.7,
    "passages": [
      "Suez Canal",
      "Strait of Gibraltar",
      "Panama Canal"
    ],
    "coast": "west",
    "corridors": [
      "redNorth",
      "suez",
      "medWest",
      "atlanticAmerica",
      "panama"
    ],
    "approach": [
      [
        -79.8,
        7.5
      ],
      [
        -83,
        6
      ],
      [
        -89,
        9
      ],
      [
        -98,
        13
      ],
      [
        -107,
        19
      ],
      [
        -113,
        24
      ],
      [
        -117,
        29
      ],
      [
        -119,
        32
      ],
      [
        -118.8,
        33.3
      ]
    ]
  },
  {
    "name": "Balboa, Panama",
    "country": "Panama",
    "port": "Balboa",
    "lon": -79.57,
    "lat": 8.92,
    "passages": [
      "Suez Canal",
      "Strait of Gibraltar",
      "Panama Canal"
    ],
    "corridors": [
      "redNorth",
      "suez",
      "medWest",
      "atlanticAmerica"
    ],
    "approach": [
      [
        -79.92,
        9.27
      ],
      [
        -79.92,
        9.21
      ],
      [
        -79.87,
        9.18
      ],
      [
        -79.81,
        9.16
      ],
      [
        -79.77,
        9.11
      ],
      [
        -79.72,
        9.12
      ],
      [
        -79.68,
        9.1
      ],
      [
        -79.65,
        9.05
      ],
      [
        -79.62,
        9.02
      ],
      [
        -79.6,
        9
      ],
      [
        -79.59,
        8.96
      ],
      [
        -79.57,
        8.92
      ]
    ]
  },
  {
    "name": "Cartagena, Colombia",
    "country": "Colombia",
    "port": "Cartagena",
    "lon": -75.55,
    "lat": 10.35,
    "passages": [
      "Suez Canal",
      "Strait of Gibraltar"
    ],
    "corridors": [
      "redNorth",
      "suez",
      "medWest"
    ],
    "approach": [
      [
        -15,
        34
      ],
      [
        -30,
        27
      ],
      [
        -45,
        20
      ],
      [
        -60,
        16
      ],
      [
        -67,
        15
      ],
      [
        -73,
        13
      ],
      [
        -75.8,
        11.5
      ]
    ]
  },
  {
    "name": "Santos, Brazil",
    "country": "Brazil",
    "port": "Santos",
    "lon": -46.3,
    "lat": -24,
    "passages": [
      "Bab el-Mandeb Strait",
      "Cape of Good Hope"
    ],
    "corridors": [],
    "approach": [
      [
        38.8,
        21.3
      ],
      [
        40,
        19
      ],
      [
        42.5,
        15
      ],
      [
        43.3,
        12.7
      ],
      [
        44.5,
        12.2
      ],
      [
        47,
        12.4
      ],
      [
        49,
        12.4
      ],
      [
        51.8,
        12.5
      ],
      [
        53,
        11
      ],
      [
        53,
        8
      ],
      [
        51,
        2
      ],
      [
        47,
        -5
      ],
      [
        44,
        -10
      ],
      [
        43,
        -16
      ],
      [
        42,
        -23
      ],
      [
        37,
        -30
      ],
      [
        30,
        -35
      ],
      [
        23,
        -36
      ],
      [
        18,
        -36
      ],
      [
        8,
        -34
      ],
      [
        -12,
        -32
      ],
      [
        -30,
        -29
      ],
      [
        -43,
        -25
      ]
    ]
  },
  {
    "name": "Buenos Aires, Argentina",
    "country": "Argentina",
    "port": "Buenos Aires",
    "lon": -58.32,
    "lat": -34.58,
    "passages": [
      "Bab el-Mandeb Strait",
      "Cape of Good Hope"
    ],
    "corridors": [],
    "approach": [
      [
        38.8,
        21.3
      ],
      [
        40,
        19
      ],
      [
        42.5,
        15
      ],
      [
        43.3,
        12.7
      ],
      [
        44.5,
        12.2
      ],
      [
        47,
        12.4
      ],
      [
        49,
        12.4
      ],
      [
        51.8,
        12.5
      ],
      [
        53,
        11
      ],
      [
        53,
        8
      ],
      [
        51,
        2
      ],
      [
        47,
        -5
      ],
      [
        44,
        -10
      ],
      [
        43,
        -16
      ],
      [
        42,
        -23
      ],
      [
        37,
        -30
      ],
      [
        30,
        -35
      ],
      [
        23,
        -36
      ],
      [
        18,
        -36
      ],
      [
        8,
        -36
      ],
      [
        -12,
        -36
      ],
      [
        -35,
        -37
      ],
      [
        -50,
        -37
      ],
      [
        -55,
        -36
      ],
      [
        -56,
        -35.2
      ],
      [
        -57,
        -34.9
      ],
      [
        -58,
        -34.6
      ]
    ]
  },
  {
    "name": "Port of Spain, Trinidad and Tobago",
    "country": "Trinidad and Tobago",
    "port": "Port of Spain",
    "lon": -61.55,
    "lat": 10.65,
    "passages": [
      "Suez Canal",
      "Strait of Gibraltar"
    ],
    "corridors": [
      "redNorth",
      "suez",
      "medWest"
    ],
    "approach": [
      [
        -15,
        34
      ],
      [
        -30,
        27
      ],
      [
        -45,
        20
      ],
      [
        -57,
        15
      ],
      [
        -59,
        12
      ],
      [
        -60,
        11.8
      ],
      [
        -61.4,
        11.7
      ],
      [
        -62,
        11
      ],
      [
        -62,
        10.6
      ]
    ]
  }
];
  const passages = [
  {
    "name": "Strait of Hormuz",
    "lon": 56.35,
    "lat": 26.6
  },
  {
    "name": "Bab el-Mandeb Strait",
    "lon": 43.3,
    "lat": 12.7
  },
  {
    "name": "Suez Canal",
    "lon": 32.43,
    "lat": 30.45
  },
  {
    "name": "Strait of Malacca",
    "lon": 100.6,
    "lat": 3
  },
  {
    "name": "Cape of Good Hope",
    "lon": 18.45,
    "lat": -34.5
  },
  {
    "name": "Strait of Gibraltar",
    "lon": -5.3,
    "lat": 35.88
  },
  {
    "name": "Dardanelles Strait",
    "lon": 26.4,
    "lat": 40.16
  },
  {
    "name": "Bosphorus Strait",
    "lon": 29.075,
    "lat": 41.12
  },
  {
    "name": "Panama Canal",
    "lon": -79.72,
    "lat": 9.12
  }
];
  const routes = ports.map(({corridors: names, approach, ...port}) => {
    const waypoints = [...names.flatMap(name => corridors[name]), ...approach];
    const last = waypoints[waypoints.length - 1];
    if (!last || last[0] !== port.lon || last[1] !== port.lat) waypoints.push([port.lon, port.lat]);
    return {...port, waypoints};
  });
  window.BiharShippingNetwork = Object.freeze({
    hub: {name: 'Jeddah, Saudi Arabia', lon: 39.17, lat: 21.48},
    routes, passages
  });
})();
