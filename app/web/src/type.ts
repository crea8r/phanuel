/**
 * Program IDL in camelCase format in order to be used in JS/TS.
 *
 * Note that this is only a type helper and is not the actual IDL. The original
 * IDL can be found at `target/idl/phanuel.json`.
 */
export type Phanuel = {
  "address": "Pha5A3BB4xKRZDs8ycvukFUagaKvk3AQBaH3J5qwAok",
  "metadata": {
    "name": "phanuel",
    "version": "0.1.0",
    "spec": "0.1.0",
    "description": "Created with Anchor"
  },
  "instructions": [
    {
      "name": "activateMember",
      "discriminator": [
        5,
        114,
        217,
        5,
        226,
        191,
        32,
        133
      ],
      "accounts": [
        {
          "name": "memberInfo",
          "writable": true
        },
        {
          "name": "communityAccount"
        },
        {
          "name": "admin",
          "writable": true,
          "signer": true,
          "relations": [
            "communityAccount"
          ]
        },
        {
          "name": "member",
          "relations": [
            "memberInfo"
          ]
        }
      ],
      "args": []
    },
    {
      "name": "addMember",
      "discriminator": [
        13,
        116,
        123,
        130,
        126,
        198,
        57,
        34
      ],
      "accounts": [
        {
          "name": "communityAccount",
          "writable": true
        },
        {
          "name": "memberInfo",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  85,
                  115,
                  101,
                  114
                ]
              },
              {
                "kind": "account",
                "path": "communityAccount"
              },
              {
                "kind": "account",
                "path": "member"
              }
            ]
          }
        },
        {
          "name": "admin",
          "writable": true,
          "signer": true,
          "relations": [
            "communityAccount"
          ]
        },
        {
          "name": "renter",
          "writable": true,
          "signer": true
        },
        {
          "name": "member"
        },
        {
          "name": "systemProgram",
          "address": "11111111111111111111111111111111"
        },
        {
          "name": "phanuelProgram",
          "address": "Pha5A3BB4xKRZDs8ycvukFUagaKvk3AQBaH3J5qwAok"
        }
      ],
      "args": []
    },
    {
      "name": "addMultipleMember",
      "discriminator": [
        162,
        184,
        129,
        166,
        149,
        17,
        216,
        56
      ],
      "accounts": [
        {
          "name": "communityAccount",
          "writable": true
        },
        {
          "name": "admin",
          "writable": true,
          "signer": true,
          "relations": [
            "communityAccount"
          ]
        },
        {
          "name": "renter",
          "writable": true,
          "signer": true
        },
        {
          "name": "systemProgram",
          "address": "11111111111111111111111111111111"
        },
        {
          "name": "phanuelProgram",
          "address": "Pha5A3BB4xKRZDs8ycvukFUagaKvk3AQBaH3J5qwAok"
        }
      ],
      "args": [
        {
          "name": "noOfMember",
          "type": "u8"
        }
      ]
    },
    {
      "name": "addMultipleMemberTelegram",
      "discriminator": [
        39,
        89,
        22,
        204,
        222,
        29,
        16,
        255
      ],
      "accounts": [
        {
          "name": "communityAccount"
        },
        {
          "name": "admin",
          "writable": true,
          "signer": true,
          "relations": [
            "communityAccount"
          ]
        },
        {
          "name": "renter",
          "writable": true,
          "signer": true
        },
        {
          "name": "systemProgram",
          "address": "11111111111111111111111111111111"
        }
      ],
      "args": [
        {
          "name": "noOfMember",
          "type": "u8"
        },
        {
          "name": "usernames",
          "type": {
            "vec": "string"
          }
        }
      ]
    },
    {
      "name": "changeAdminAndFee",
      "discriminator": [
        23,
        2,
        170,
        87,
        96,
        43,
        111,
        91
      ],
      "accounts": [
        {
          "name": "adminAccount",
          "writable": true
        },
        {
          "name": "authority",
          "writable": true,
          "signer": true,
          "relations": [
            "adminAccount"
          ]
        },
        {
          "name": "systemProgram",
          "address": "11111111111111111111111111111111"
        },
        {
          "name": "phanuelProgram",
          "address": "Pha5A3BB4xKRZDs8ycvukFUagaKvk3AQBaH3J5qwAok"
        }
      ],
      "args": [
        {
          "name": "newAdmin",
          "type": "pubkey"
        },
        {
          "name": "closeBagFee",
          "type": "u64"
        },
        {
          "name": "createCommunityFee",
          "type": "u64"
        }
      ]
    },
    {
      "name": "create",
      "discriminator": [
        24,
        30,
        200,
        40,
        5,
        28,
        7,
        119
      ],
      "accounts": [
        {
          "name": "communityAccount",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  77,
                  73,
                  78,
                  84
                ]
              },
              {
                "kind": "account",
                "path": "random"
              }
            ]
          }
        },
        {
          "name": "admin",
          "writable": true,
          "signer": true
        },
        {
          "name": "random"
        },
        {
          "name": "systemProgram",
          "address": "11111111111111111111111111111111"
        },
        {
          "name": "renter",
          "writable": true,
          "signer": true
        }
      ],
      "args": [
        {
          "name": "symbol",
          "type": "string"
        },
        {
          "name": "decayAfter",
          "type": "u64"
        }
      ]
    },
    {
      "name": "disableMember",
      "discriminator": [
        77,
        253,
        57,
        92,
        4,
        137,
        31,
        8
      ],
      "accounts": [
        {
          "name": "memberInfo",
          "writable": true
        },
        {
          "name": "communityAccount"
        },
        {
          "name": "admin",
          "writable": true,
          "signer": true,
          "relations": [
            "communityAccount"
          ]
        },
        {
          "name": "member",
          "relations": [
            "memberInfo"
          ]
        }
      ],
      "args": []
    },
    {
      "name": "editMultipleMemberTelegram",
      "discriminator": [
        119,
        151,
        122,
        180,
        172,
        140,
        19,
        147
      ],
      "accounts": [
        {
          "name": "communityAccount"
        },
        {
          "name": "admin",
          "writable": true,
          "signer": true,
          "relations": [
            "communityAccount"
          ]
        },
        {
          "name": "renter",
          "writable": true,
          "signer": true
        },
        {
          "name": "systemProgram",
          "address": "11111111111111111111111111111111"
        }
      ],
      "args": [
        {
          "name": "noOfMember",
          "type": "u8"
        },
        {
          "name": "usernames",
          "type": {
            "vec": "string"
          }
        }
      ]
    },
    {
      "name": "initialize",
      "discriminator": [
        175,
        175,
        109,
        31,
        13,
        152,
        155,
        237
      ],
      "accounts": [
        {
          "name": "adminAccount",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  65,
                  68,
                  77,
                  73,
                  78
                ]
              }
            ]
          }
        },
        {
          "name": "authority",
          "writable": true,
          "signer": true
        },
        {
          "name": "systemProgram",
          "address": "11111111111111111111111111111111"
        },
        {
          "name": "phanuelProgram",
          "address": "Pha5A3BB4xKRZDs8ycvukFUagaKvk3AQBaH3J5qwAok"
        }
      ],
      "args": [
        {
          "name": "closeBagFee",
          "type": "u64"
        },
        {
          "name": "createCommunityFee",
          "type": "u64"
        }
      ]
    },
    {
      "name": "mintTo",
      "discriminator": [
        241,
        34,
        48,
        186,
        37,
        179,
        123,
        192
      ],
      "accounts": [
        {
          "name": "systemProgram",
          "address": "11111111111111111111111111111111"
        },
        {
          "name": "communityAccount",
          "writable": true
        },
        {
          "name": "admin",
          "writable": true,
          "signer": true,
          "relations": [
            "communityAccount"
          ]
        },
        {
          "name": "renter",
          "writable": true,
          "signer": true
        },
        {
          "name": "bag",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  66,
                  97,
                  103
                ]
              },
              {
                "kind": "account",
                "path": "memberInfo"
              },
              {
                "kind": "account",
                "path": "member_info.max",
                "account": "memberInfo"
              }
            ]
          }
        },
        {
          "name": "memberInfo",
          "writable": true
        },
        {
          "name": "member",
          "relations": [
            "memberInfo"
          ]
        },
        {
          "name": "clock",
          "address": "SysvarC1ock11111111111111111111111111111111"
        },
        {
          "name": "phanuelProgram",
          "address": "Pha5A3BB4xKRZDs8ycvukFUagaKvk3AQBaH3J5qwAok"
        }
      ],
      "args": [
        {
          "name": "amount",
          "type": "u64"
        }
      ]
    },
    {
      "name": "multipleMint",
      "discriminator": [
        93,
        10,
        205,
        174,
        91,
        119,
        204,
        41
      ],
      "accounts": [
        {
          "name": "systemProgram",
          "address": "11111111111111111111111111111111"
        },
        {
          "name": "communityAccount",
          "writable": true
        },
        {
          "name": "admin",
          "writable": true,
          "signer": true,
          "relations": [
            "communityAccount"
          ]
        },
        {
          "name": "renter",
          "writable": true,
          "signer": true
        },
        {
          "name": "clock",
          "address": "SysvarC1ock11111111111111111111111111111111"
        },
        {
          "name": "phanuelProgram",
          "address": "Pha5A3BB4xKRZDs8ycvukFUagaKvk3AQBaH3J5qwAok"
        }
      ],
      "args": [
        {
          "name": "noOfMint",
          "type": "u8"
        },
        {
          "name": "amount",
          "type": "u64"
        }
      ]
    },
    {
      "name": "mutCommunityTelegram",
      "discriminator": [
        142,
        248,
        144,
        128,
        60,
        179,
        78,
        248
      ],
      "accounts": [
        {
          "name": "telegramCommunity",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  84,
                  101,
                  108,
                  101,
                  103,
                  114,
                  97,
                  109
                ]
              },
              {
                "kind": "account",
                "path": "communityAccount"
              }
            ]
          }
        },
        {
          "name": "communityAccount"
        },
        {
          "name": "admin",
          "writable": true,
          "signer": true,
          "relations": [
            "communityAccount"
          ]
        },
        {
          "name": "renter",
          "writable": true,
          "signer": true
        },
        {
          "name": "systemProgram",
          "address": "11111111111111111111111111111111"
        }
      ],
      "args": [
        {
          "name": "chatId",
          "type": "i64"
        }
      ]
    },
    {
      "name": "mutMemberTelegram",
      "discriminator": [
        70,
        27,
        225,
        67,
        63,
        135,
        98,
        154
      ],
      "accounts": [
        {
          "name": "telegramMemberInfo",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  84,
                  101,
                  108,
                  101,
                  103,
                  114,
                  97,
                  109,
                  77,
                  101,
                  109,
                  98,
                  101,
                  114,
                  73,
                  110,
                  102,
                  111
                ]
              },
              {
                "kind": "account",
                "path": "memberInfo"
              }
            ]
          }
        },
        {
          "name": "memberInfo"
        },
        {
          "name": "communityAccount"
        },
        {
          "name": "admin",
          "writable": true,
          "signer": true,
          "relations": [
            "communityAccount"
          ]
        },
        {
          "name": "renter",
          "writable": true,
          "signer": true
        },
        {
          "name": "systemProgram",
          "address": "11111111111111111111111111111111"
        }
      ],
      "args": [
        {
          "name": "username",
          "type": "string"
        }
      ]
    },
    {
      "name": "removeMember",
      "discriminator": [
        171,
        57,
        231,
        150,
        167,
        128,
        18,
        55
      ],
      "accounts": [
        {
          "name": "memberInfo",
          "writable": true
        },
        {
          "name": "communityAccount"
        },
        {
          "name": "admin",
          "writable": true,
          "signer": true,
          "relations": [
            "communityAccount"
          ]
        },
        {
          "name": "member",
          "relations": [
            "memberInfo"
          ]
        }
      ],
      "args": []
    },
    {
      "name": "transfer",
      "discriminator": [
        163,
        52,
        200,
        231,
        140,
        3,
        69,
        186
      ],
      "accounts": [
        {
          "name": "sender",
          "writable": true,
          "signer": true
        },
        {
          "name": "renter",
          "writable": true,
          "signer": true
        },
        {
          "name": "member",
          "relations": [
            "receiverInfo"
          ]
        },
        {
          "name": "receiverInfo",
          "writable": true
        },
        {
          "name": "senderInfo",
          "writable": true
        },
        {
          "name": "bag",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  66,
                  97,
                  103
                ]
              },
              {
                "kind": "account",
                "path": "receiverInfo"
              },
              {
                "kind": "account",
                "path": "receiver_info.max",
                "account": "memberInfo"
              }
            ]
          }
        },
        {
          "name": "communityAccount"
        },
        {
          "name": "systemProgram",
          "address": "11111111111111111111111111111111"
        },
        {
          "name": "memo",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  77,
                  101,
                  109,
                  111
                ]
              },
              {
                "kind": "account",
                "path": "receiverInfo"
              },
              {
                "kind": "account",
                "path": "receiver_info.max",
                "account": "memberInfo"
              }
            ]
          }
        },
        {
          "name": "phanuelProgram",
          "address": "Pha5A3BB4xKRZDs8ycvukFUagaKvk3AQBaH3J5qwAok"
        },
        {
          "name": "clock",
          "address": "SysvarC1ock11111111111111111111111111111111"
        }
      ],
      "args": [
        {
          "name": "amountEachBags",
          "type": {
            "vec": "u64"
          }
        },
        {
          "name": "note",
          "type": "string"
        }
      ]
    },
    {
      "name": "update",
      "discriminator": [
        219,
        200,
        88,
        176,
        158,
        63,
        253,
        127
      ],
      "accounts": [
        {
          "name": "communityAccount",
          "writable": true
        },
        {
          "name": "admin",
          "writable": true,
          "signer": true,
          "relations": [
            "communityAccount"
          ]
        },
        {
          "name": "systemProgram",
          "address": "11111111111111111111111111111111"
        }
      ],
      "args": [
        {
          "name": "symbol",
          "type": "string"
        },
        {
          "name": "decayAfter",
          "type": "u64"
        }
      ]
    }
  ],
  "accounts": [
    {
      "name": "adminAccount",
      "discriminator": [
        153,
        119,
        180,
        178,
        43,
        66,
        235,
        148
      ]
    },
    {
      "name": "bag",
      "discriminator": [
        209,
        73,
        132,
        189,
        4,
        169,
        188,
        103
      ]
    },
    {
      "name": "communityAccount",
      "discriminator": [
        111,
        62,
        119,
        115,
        144,
        161,
        149,
        151
      ]
    },
    {
      "name": "memberInfo",
      "discriminator": [
        136,
        12,
        253,
        251,
        18,
        27,
        161,
        167
      ]
    },
    {
      "name": "memo",
      "discriminator": [
        161,
        231,
        183,
        96,
        66,
        120,
        3,
        80
      ]
    },
    {
      "name": "telegramCommunity",
      "discriminator": [
        110,
        159,
        209,
        162,
        194,
        90,
        234,
        236
      ]
    },
    {
      "name": "telegramMemberInfo",
      "discriminator": [
        210,
        191,
        61,
        173,
        212,
        204,
        154,
        27
      ]
    }
  ],
  "errors": [
    {
      "code": 6000,
      "name": "insufficientBalance",
      "msg": "Insufficient balance"
    },
    {
      "code": 6001,
      "name": "invalidBagOwner",
      "msg": "Invalid bag owner"
    },
    {
      "code": 6002,
      "name": "bagDecayed",
      "msg": "Bag decayed"
    },
    {
      "code": 6003,
      "name": "bagNotDecayed",
      "msg": "Bag not decayed"
    },
    {
      "code": 6004,
      "name": "invalidMemberStatus",
      "msg": "Sender or Receiver disabled"
    },
    {
      "code": 6005,
      "name": "exceedMaxTokenLifeTime",
      "msg": "Exceed max token lifetime"
    },
    {
      "code": 6006,
      "name": "unauthorized",
      "msg": "unauthorized"
    },
    {
      "code": 6007,
      "name": "invalidNumberOfMint",
      "msg": "Invalid number of mint"
    },
    {
      "code": 6008,
      "name": "invalidBagPda",
      "msg": "Invalid Bag PDA"
    },
    {
      "code": 6009,
      "name": "exceedNumberOfMember",
      "msg": "Exceed Number of Member"
    },
    {
      "code": 6010,
      "name": "invalidCommunity",
      "msg": "Invalid Community"
    }
  ],
  "types": [
    {
      "name": "adminAccount",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "authority",
            "type": "pubkey"
          },
          {
            "name": "closeBagFee",
            "type": "u64"
          },
          {
            "name": "createCommunityFee",
            "type": "u64"
          }
        ]
      }
    },
    {
      "name": "bag",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "community",
            "type": "pubkey"
          },
          {
            "name": "member",
            "type": "pubkey"
          },
          {
            "name": "amount",
            "type": "u64"
          },
          {
            "name": "decayAt",
            "type": "u64"
          },
          {
            "name": "createdAt",
            "type": "u64"
          }
        ]
      }
    },
    {
      "name": "communityAccount",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "decayAfter",
            "type": "u64"
          },
          {
            "name": "admin",
            "type": "pubkey"
          },
          {
            "name": "symbol",
            "type": "string"
          }
        ]
      }
    },
    {
      "name": "memberInfo",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "community",
            "type": "pubkey"
          },
          {
            "name": "member",
            "type": "pubkey"
          },
          {
            "name": "max",
            "type": "u64"
          },
          {
            "name": "status",
            "type": "u8"
          }
        ]
      }
    },
    {
      "name": "memo",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "community",
            "type": "pubkey"
          },
          {
            "name": "from",
            "type": "pubkey"
          },
          {
            "name": "to",
            "type": "pubkey"
          },
          {
            "name": "amount",
            "type": "u64"
          },
          {
            "name": "note",
            "type": "string"
          }
        ]
      }
    },
    {
      "name": "telegramCommunity",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "community",
            "type": "pubkey"
          },
          {
            "name": "chatId",
            "type": "i64"
          }
        ]
      }
    },
    {
      "name": "telegramMemberInfo",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "memberInfo",
            "type": "pubkey"
          },
          {
            "name": "community",
            "type": "pubkey"
          },
          {
            "name": "username",
            "type": "string"
          }
        ]
      }
    }
  ]
};
