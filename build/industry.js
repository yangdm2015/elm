const industry = [
  {
    value: 'A',
    label: '农、林、牧、渔业',
    children: [
      {
        value: '01',
        label: '农业',
        children: [
          {
            value: '011',
            label: '谷物种植',
            children: [
              {
                value: '0111',
                label: '稻谷种植',

              },
              {
                value: '0112',
                label: '小麦种植',

              },
              {
                value: '0113',
                label: '玉米种植',

              },
              {
                value: '0119',
                label: '其他谷物种植',

              }
            ]
          },
          {
            value: '012',
            label: '豆类、油料和薯类种植',
            children: [
              {
                value: '0121',
                label: '豆类种植',

              },
              {
                value: '0122',
                label: '油料种植',

              },
              {
                value: '0123',
                label: '薯类种植',

              }
            ]
          },
          {
            value: '013',
            label: '棉、麻、糖、烟草种植',
            children: [
              {
                value: '0131',
                label: '棉花种植',

              },
              {
                value: '0132',
                label: '麻类种植',

              },
              {
                value: '0133',
                label: '糖料种植',

              },
              {
                value: '0134',
                label: '烟草种植',

              }
            ]
          },
          {
            value: '014',
            label: '蔬菜、食用菌及园艺作物种植',
            children: [
              {
                value: '0141',
                label: '蔬菜种植',

              },
              {
                value: '0142',
                label: '食用菌种植',

              },
              {
                value: '0143',
                label: '花卉种植',

              },
              {
                value: '0149',
                label: '其他园艺作物种植',

              }
            ]
          },
          {
            value: '015',
            label: '水果种植',
            children: [
              {
                value: '0151',
                label: '仁果类和核果类水果种植',

              },
              {
                value: '0152',
                label: '葡萄种植',

              },
              {
                value: '0153',
                label: '柑橘类种植',

              },
              {
                value: '0154',
                label: '香蕉等亚热带水果种植',

              },
              {
                value: '0159',
                label: '其他水果种植',

              }
            ]
          },
          {
            value: '016',
            label: '坚果、含油果、香料和饮料作物种植',
            children: [
              {
                value: '0161',
                label: '坚果种植',

              },
              {
                value: '0162',
                label: '含油果种植',

              },
              {
                value: '0163',
                label: '香料作物种植',

              },
              {
                value: '0169',
                label: '茶及其他饮料作物种植',

              }
            ]
          },
          {
            value: '017',
            label: '中药材种植',
            children: [
              {
                value: '0170',
                label: '中药材种植',

              }
            ]
          },
          {
            value: '019',
            label: '其他农业',
            children: [
              {
                value: '0190',
                label: '其他农业',

              }
            ]
          }
        ]
      },
      {
        value: '02',
        label: '林业',
        children: [
          {
            value: '021',
            label: '林木育种和育苗',
            children: [
              {
                value: '0211',
                label: '林木育种',

              },
              {
                value: '0212',
                label: '林木育苗',

              }
            ]
          },
          {
            value: '022',
            label: '造林和更新',
            children: [
              {
                value: '0220',
                label: '造林和更新',

              }
            ]
          },
          {
            value: '023',
            label: '森林经营和管护',
            children: [
              {
                value: '0230',
                label: '森林经营和管护',

              }
            ]
          },
          {
            value: '024',
            label: '木材和竹材采运',
            children: [
              {
                value: '0241',
                label: '木材采运',

              },
              {
                value: '0242',
                label: '竹材采运',

              }
            ]
          },
          {
            value: '025',
            label: '林产品采集',
            children: [
              {
                value: '0251',
                label: '木竹材林产品采集',

              },
              {
                value: '0252',
                label: '非木竹材林产品采集',

              }
            ]
          }
        ]
      },
      {
        value: '03',
        label: '畜牧业',
        children: [
          {
            value: '031',
            label: '牲畜饲养',
            children: [
              {
                value: '0311',
                label: '牛的饲养',

              },
              {
                value: '0312',
                label: '马的饲养',

              },
              {
                value: '0313',
                label: '猪的饲养',

              },
              {
                value: '0314',
                label: '羊的饲养',

              },
              {
                value: '0315',
                label: '骆驼饲养',

              },
              {
                value: '0319',
                label: '其他牲畜饲养',

              }
            ]
          },
          {
            value: '032',
            label: '家禽饲养',
            children: [
              {
                value: '0321',
                label: '鸡的饲养',

              },
              {
                value: '0322',
                label: '鸭的饲养',

              },
              {
                value: '0323',
                label: '鹅的饲养',

              },
              {
                value: '0329',
                label: '其他家禽饲养',

              }
            ]
          },
          {
            value: '033',
            label: '狩猎和捕捉动物',
            children: [
              {
                value: '0330',
                label: '狩猎和捕捉动物',

              }
            ]
          },
          {
            value: '039',
            label: '其他畜牧业',
            children: [
              {
                value: '0390',
                label: '其他畜牧业',

              }
            ]
          }
        ]
      },
      {
        value: '04',
        label: '渔业',
        children: [
          {
            value: '041',
            label: '水产养殖',
            children: [
              {
                value: '0411',
                label: '海水养殖',

              },
              {
                value: '0412',
                label: '内陆养殖',

              }
            ]
          },
          {
            value: '042',
            label: '水产捕捞',
            children: [
              {
                value: '0421',
                label: '海水捕捞',

              },
              {
                value: '0422',
                label: '内陆捕捞',

              }
            ]
          }
        ]
      },
      {
        value: '05',
        label: '农、林、牧、渔服务业',
        children: [
          {
            value: '051',
            label: '农业服务业',
            children: [
              {
                value: '0511',
                label: '农业机械服务',

              },
              {
                value: '0512',
                label: '灌溉服务',

              },
              {
                value: '0513',
                label: '农产品初加工服务',

              },
              {
                value: '0519',
                label: '其他农业服务',

              }
            ]
          },
          {
            value: '052',
            label: '林业服务业',
            children: [
              {
                value: '0521',
                label: '林业有害生物防治服务',

              },
              {
                value: '0522',
                label: '森林防火服务',

              },
              {
                value: '0523',
                label: '林产品初级加工服务',

              },
              {
                value: '0529',
                label: '其他林业服务',

              }
            ]
          },
          {
            value: '053',
            label: '畜牧服务业',
            children: [
              {
                value: '0530',
                label: '畜牧服务业',

              }
            ]
          },
          {
            value: '054',
            label: '渔业服务业',
            children: [
              {
                value: '0540',
                label: '渔业服务业',

              }
            ]
          }
        ]
      }
    ]
  },
  {
    value: 'B',
    label: '采矿业',
    children: [
      {
        value: '06',
        label: '煤炭开采和洗选业',
        children: [
          {
            value: '061',
            label: '烟煤和无烟煤开采洗选',
            children: [
              {
                value: '0610',
                label: '烟煤和无烟煤开采洗选',

              }
            ]
          },
          {
            value: '062',
            label: '褐煤开采洗选',
            children: [
              {
                value: '0620',
                label: '褐煤开采洗选',

              }
            ]
          },
          {
            value: '069',
            label: '其他煤炭采选',
            children: [
              {
                value: '0690',
                label: '其他煤炭采选',

              }
            ]
          }
        ]
      },
      {
        value: '10',
        label: '非金属矿采选业',
        children: [
          {
            value: '101',
            label: '土砂石开采',
            children: [
              {
                value: '1011',
                label: '石灰石、石膏开采',

              },
              {
                value: '1012',
                label: '建筑装饰用石开采',

              },
              {
                value: '1013',
                label: '耐火土石开采',

              },
              {
                value: '1019',
                label: '粘土及其他土砂石开采',

              }
            ]
          },
          {
            value: '102',
            label: '化学矿开采',
            children: [
              {
                value: '1020',
                label: '化学矿开采',

              }
            ]
          },
          {
            value: '103',
            label: '采盐',
            children: [
              {
                value: '1030',
                label: '采盐',

              }
            ]
          },
          {
            value: '109',
            label: '石棉及其他非金属矿采选',
            children: [
              {
                value: '1091',
                label: '石棉、云母矿采选',

              },
              {
                value: '1092',
                label: '石墨、滑石采选',

              },
              {
                value: '1093',
                label: '宝石、玉石采选',

              },
              {
                value: '1099',
                label: '其他未列明非金属矿采选',

              }
            ]
          }
        ]
      },
      {
        value: '11',
        label: '开采辅助活动',
        children: [
          {
            value: '111',
            label: '煤炭开采和洗选辅助活动',
            children: [
              {
                value: '1110',
                label: '煤炭开采和洗选辅助活动',

              }
            ]
          },
          {
            value: '112',
            label: '石油和天然气开采辅助活动',
            children: [
              {
                value: '1120',
                label: '石油和天然气开采辅助活动',

              }
            ]
          },
          {
            value: '119',
            label: '其他开采辅助活动',
            children: [
              {
                value: '1190',
                label: '其他开采辅助活动',

              }
            ]
          }
        ]
      },
      {
        value: '12',
        label: '其他采矿业',
        children: [
          {
            value: '120',
            label: '其他采矿业',
            children: [
              {
                value: '1200',
                label: '其他采矿业',

              }
            ]
          }
        ]
      }
    ]
  },
  {
    value: 'C',
    label: '制造业',
    children: [
      {
        value: '13',
        label: '农副食品加工业',
        children: [
          {
            value: '131',
            label: '谷物磨制',
            children: [
              {
                value: '1310',
                label: '谷物磨制',

              }
            ]
          },
          {
            value: '132',
            label: '饲料加工',
            children: [
              {
                value: '1320',
                label: '饲料加工',

              }
            ]
          },
          {
            value: '133',
            label: '植物油加工',
            children: [
              {
                value: '1331',
                label: '食用植物油加工',

              },
              {
                value: '1332',
                label: '非食用植物油加工',

              }
            ]
          },
          {
            value: '134',
            label: '制糖业',
            children: [
              {
                value: '1340',
                label: '制糖业',

              }
            ]
          },
          {
            value: '135',
            label: '屠宰及肉类加工',
            children: [
              {
                value: '1351',
                label: '牲畜屠宰',

              },
              {
                value: '1352',
                label: '禽类屠宰',

              },
              {
                value: '1353',
                label: '肉制品及副产品加工',

              }
            ]
          },
          {
            value: '136',
            label: '水产品加工',
            children: [
              {
                value: '1361',
                label: '水产品冷冻加工',

              },
              {
                value: '1362',
                label: '鱼糜制品及水产品干腌制加工',

              },
              {
                value: '1363',
                label: '水产饲料制造',

              },
              {
                value: '1364',
                label: '鱼油提取及制品制造',

              },
              {
                value: '1369',
                label: '其他水产品加工',

              }
            ]
          },
          {
            value: '137',
            label: '蔬菜、水果和坚果加工',
            children: [
              {
                value: '1371',
                label: '蔬菜加工',

              },
              {
                value: '1372',
                label: '水果和坚果加工',

              }
            ]
          },
          {
            value: '139',
            label: '其他农副食品加工',
            children: [
              {
                value: '1391',
                label: '淀粉及淀粉制品制造',

              },
              {
                value: '1392',
                label: '豆制品制造',

              },
              {
                value: '1393',
                label: '蛋品加工',

              },
              {
                value: '1399',
                label: '其他未列明农副食品加工',

              }
            ]
          }
        ]
      },
      {
        value: '14',
        label: '食品制造业',
        children: [
          {
            value: '141',
            label: '焙烤食品制造',
            children: [
              {
                value: '1411',
                label: '糕点、面包制造',

              },
              {
                value: '1419',
                label: '饼干及其他焙烤食品制造',

              }
            ]
          },
          {
            value: '142',
            label: '糖果、巧克力及蜜饯制造',
            children: [
              {
                value: '1421',
                label: '糖果、巧克力制造',

              },
              {
                value: '1422',
                label: '蜜饯制作',

              }
            ]
          },
          {
            value: '143',
            label: '方便食品制造',
            children: [
              {
                value: '1431',
                label: '米、面制品制造',

              },
              {
                value: '1432',
                label: '速冻食品制造',

              },
              {
                value: '1439',
                label: '方便面及其他方便食品制造',

              }
            ]
          },
          {
            value: '144',
            label: '乳制品制造',
            children: [
              {
                value: '1440',
                label: '乳制品制造',

              }
            ]
          },
          {
            value: '145',
            label: '罐头食品制造',
            children: [
              {
                value: '1451',
                label: '肉、禽类罐头制造',

              },
              {
                value: '1452',
                label: '水产品罐头制造',

              },
              {
                value: '1453',
                label: '蔬菜、水果罐头制造',

              },
              {
                value: '1459',
                label: '其他罐头食品制造',

              }
            ]
          },
          {
            value: '146',
            label: '调味品、发酵制品制造',
            children: [
              {
                value: '1461',
                label: '味精制造',

              },
              {
                value: '1462',
                label: '酱油、食醋及类似制品制造',

              },
              {
                value: '1469',
                label: '其他调味品、发酵制品制造',

              }
            ]
          },
          {
            value: '149',
            label: '其他食品制造',
            children: [
              {
                value: '1491',
                label: '营养食品制造',

              },
              {
                value: '1492',
                label: '保健食品制造',

              },
              {
                value: '1493',
                label: '冷冻饮品及食用冰制造',

              },
              {
                value: '1494',
                label: '盐加工',

              },
              {
                value: '1495',
                label: '食品及饲料添加剂制造',

              },
              {
                value: '1499',
                label: '其他未列明食品制造',

              }
            ]
          }
        ]
      },
      {
        value: '15',
        label: '酒、饮料和精制茶制造业',
        children: [
          {
            value: '151',
            label: '酒的制造',
            children: [
              {
                value: '1511',
                label: '酒精制造',

              },
              {
                value: '1512',
                label: '白酒制造',

              },
              {
                value: '1513',
                label: '啤酒制造',

              },
              {
                value: '1514',
                label: '黄酒制造',

              },
              {
                value: '1515',
                label: '葡萄酒制造',

              },
              {
                value: '1519',
                label: '其他酒制造',

              }
            ]
          },
          {
            value: '152',
            label: '饮料制造',
            children: [
              {
                value: '1521',
                label: '碳酸饮料制造',

              },
              {
                value: '1522',
                label: '瓶（罐）装饮用水制造',

              },
              {
                value: '1523',
                label: '果菜汁及果菜汁饮料制造',

              },
              {
                value: '1524',
                label: '含乳饮料和植物蛋白饮料制造',

              },
              {
                value: '1525',
                label: '固体饮料制造',

              },
              {
                value: '1529',
                label: '茶饮料及其他饮料制造',

              }
            ]
          },
          {
            value: '153',
            label: '精制茶加工',
            children: [
              {
                value: '1530',
                label: '精制茶加工',

              }
            ]
          }
        ]
      },
      {
        value: '16',
        label: '烟草制品业',
        children: [
          {
            value: '161',
            label: '烟叶复烤',
            children: [
              {
                value: '1610',
                label: '烟叶复烤',

              }
            ]
          },
          {
            value: '162',
            label: '卷烟制造',
            children: [
              {
                value: '1620',
                label: '卷烟制造',

              }
            ]
          },
          {
            value: '169',
            label: '其他烟草制品制造',
            children: [
              {
                value: '1690',
                label: '其他烟草制品制造',

              }
            ]
          }
        ]
      },
      {
        value: '17',
        label: '纺织业',
        children: [
          {
            value: '171',
            label: '棉纺织及印染精加工',
            children: [
              {
                value: '1711',
                label: '棉纺纱加工',

              },
              {
                value: '1712',
                label: '棉织造加工',

              },
              {
                value: '1713',
                label: '棉印染精加工',

              }
            ]
          },
          {
            value: '172',
            label: '毛纺织及染整精加工',
            children: [
              {
                value: '1721',
                label: '毛条和毛纱线加工',

              },
              {
                value: '1722',
                label: '毛织造加工',

              },
              {
                value: '1723',
                label: '毛染整精加工',

              }
            ]
          },
          {
            value: '173',
            label: '麻纺织及染整精加工',
            children: [
              {
                value: '1731',
                label: '麻纤维纺前加工和纺纱',

              },
              {
                value: '1732',
                label: '麻织造加工',

              },
              {
                value: '1733',
                label: '麻染整精加工',

              }
            ]
          },
          {
            value: '174',
            label: '丝绢纺织及印染精加工',
            children: [
              {
                value: '1741',
                label: '缫丝加工',

              },
              {
                value: '1742',
                label: '绢纺和丝织加工',

              },
              {
                value: '1743',
                label: '丝印染精加工',

              }
            ]
          },
          {
            value: '175',
            label: '化纤织造及印染精加工',
            children: [
              {
                value: '1751',
                label: '化纤织造加工',

              },
              {
                value: '1752',
                label: '化纤织物染整精加工',

              }
            ]
          },
          {
            value: '176',
            label: '针织或钩针编织物及其制品制造',
            children: [
              {
                value: '1761',
                label: '针织或钩针编织物织造',

              },
              {
                value: '1762',
                label: '针织或钩针编织物印染精加工',

              },
              {
                value: '1763',
                label: '针织或钩针编织品制造',

              }
            ]
          },
          {
            value: '177',
            label: '家用纺织制成品制造',
            children: [
              {
                value: '1771',
                label: '床上用品制造',

              },
              {
                value: '1772',
                label: '毛巾类制品制造',

              },
              {
                value: '1773',
                label: '窗帘、布艺类产品制造',

              },
              {
                value: '1779',
                label: '其他家用纺织制成品制造',

              }
            ]
          },
          {
            value: '178',
            label: '非家用纺织制成品制造',
            children: [
              {
                value: '1781',
                label: '非织造布制造',

              },
              {
                value: '1782',
                label: '绳、索、缆制造',

              },
              {
                value: '1783',
                label: '纺织带和帘子布制造',

              },
              {
                value: '1784',
                label: '篷、帆布制造',

              },
              {
                value: '1789',
                label: '其他非家用纺织制成品制造',

              }
            ]
          }
        ]
      },
      {
        value: '18',
        label: '纺织服装、服饰业',
        children: [
          {
            value: '181',
            label: '机织服装制造',
            children: [
              {
                value: '1810',
                label: '机织服装制造',

              }
            ]
          },
          {
            value: '182',
            label: '针织或钩针编织服装制造',
            children: [
              {
                value: '1820',
                label: '针织或钩针编织服装制造',

              }
            ]
          },
          {
            value: '183',
            label: '服饰制造',
            children: [
              {
                value: '1830',
                label: '服饰制造',

              }
            ]
          }
        ]
      },
      {
        value: '19',
        label: '皮革、毛皮、羽毛及其制品和制鞋业',
        children: [
          {
            value: '191',
            label: '皮革鞣制加工',
            children: [
              {
                value: '1910',
                label: '皮革鞣制加工',

              }
            ]
          },
          {
            value: '192',
            label: '皮革制品制造',
            children: [
              {
                value: '1921',
                label: '皮革服装制造',

              },
              {
                value: '1922',
                label: '皮箱、包（袋）制造',

              },
              {
                value: '1923',
                label: '皮手套及皮装饰制品制造',

              },
              {
                value: '1929',
                label: '其他皮革制品制造',

              }
            ]
          },
          {
            value: '193',
            label: '毛皮鞣制及制品加工',
            children: [
              {
                value: '1931',
                label: '毛皮鞣制加工',

              },
              {
                value: '1932',
                label: '毛皮服装加工',

              },
              {
                value: '1939',
                label: '其他毛皮制品加工',

              }
            ]
          },
          {
            value: '194',
            label: '羽毛(绒)加工及制品制造',
            children: [
              {
                value: '1941',
                label: '羽毛（绒）加工',

              },
              {
                value: '1942',
                label: '羽毛（绒）制品加工',

              }
            ]
          },
          {
            value: '195',
            label: '制鞋业',
            children: [
              {
                value: '1951',
                label: '纺织面料鞋制造',

              },
              {
                value: '1952',
                label: '皮鞋制造',

              },
              {
                value: '1953',
                label: '塑料鞋制造',

              },
              {
                value: '1954',
                label: '橡胶鞋制造',

              },
              {
                value: '1959',
                label: '其他制鞋业',

              }
            ]
          }
        ]
      },
      {
        value: '20',
        label: '木材加工和木、竹、藤、棕、草制品业',
        children: [
          {
            value: '201',
            label: '木材加工',
            children: [
              {
                value: '2011',
                label: '锯材加工',

              },
              {
                value: '2012',
                label: '木片加工',

              },
              {
                value: '2013',
                label: '单板加工',

              },
              {
                value: '2019',
                label: '其他木材加工',

              }
            ]
          },
          {
            value: '202',
            label: '人造板制造',
            children: [
              {
                value: '2021',
                label: '胶合板制造',

              },
              {
                value: '2022',
                label: '纤维板制造',

              },
              {
                value: '2023',
                label: '刨花板制造',

              },
              {
                value: '2029',
                label: '其他人造板制造',

              }
            ]
          },
          {
            value: '203',
            label: '木制品制造',
            children: [
              {
                value: '2031',
                label: '建筑用木料及木材组件加工',

              },
              {
                value: '2032',
                label: '木门窗、楼梯制造',

              },
              {
                value: '2033',
                label: '地板制造',

              },
              {
                value: '2034',
                label: '木制容器制造',

              },
              {
                value: '2039',
                label: '软木制品及其他木制品制造',

              }
            ]
          },
          {
            value: '204',
            label: '竹、藤、棕、草等制品制造',
            children: [
              {
                value: '2041',
                label: '竹制品制造',

              },
              {
                value: '2042',
                label: '藤制品制造',

              },
              {
                value: '2043',
                label: '棕制品制造',

              },
              {
                value: '2049',
                label: '草及其他制品制造',

              }
            ]
          }
        ]
      },
      {
        value: '21',
        label: '家具制造业',
        children: [
          {
            value: '211',
            label: '木质家具制造',
            children: [
              {
                value: '2110',
                label: '木质家具制造',

              }
            ]
          },
          {
            value: '212',
            label: '竹、藤家具制造',
            children: [
              {
                value: '2120',
                label: '竹、藤家具制造',

              }
            ]
          },
          {
            value: '213',
            label: '金属家具制造',
            children: [
              {
                value: '2130',
                label: '金属家具制造',

              }
            ]
          },
          {
            value: '214',
            label: '塑料家具制造',
            children: [
              {
                value: '2140',
                label: '塑料家具制造',

              }
            ]
          },
          {
            value: '219',
            label: '其他家具制造',
            children: [
              {
                value: '2190',
                label: '其他家具制造',

              }
            ]
          }
        ]
      },
      {
        value: '22',
        label: '造纸和纸制品业',
        children: [
          {
            value: '221',
            label: '纸浆制造',
            children: [
              {
                value: '2211',
                label: '木竹浆制造',

              },
              {
                value: '2212',
                label: '非木竹浆制造',

              }
            ]
          },
          {
            value: '222',
            label: '造纸',
            children: [
              {
                value: '2221',
                label: '机制纸及纸板制造',

              },
              {
                value: '2222',
                label: '手工纸制造',

              },
              {
                value: '2223',
                label: '加工纸制造',

              }
            ]
          },
          {
            value: '223',
            label: '纸制品制造',
            children: [
              {
                value: '2231',
                label: '纸和纸板容器制造',

              },
              {
                value: '2239',
                label: '其他纸制品制造',

              }
            ]
          }
        ]
      },
      {
        value: '23',
        label: '印刷和记录媒介复制业',
        children: [
          {
            value: '231',
            label: '印刷',
            children: [
              {
                value: '2311',
                label: '书、报刊印刷',

              },
              {
                value: '2312',
                label: '本册印制',

              },
              {
                value: '2319',
                label: '包装装潢及其他印刷',

              }
            ]
          },
          {
            value: '232',
            label: '装订及印刷相关服务',
            children: [
              {
                value: '2320',
                label: '装订及印刷相关服务',

              }
            ]
          },
          {
            value: '233',
            label: '记录媒介复制',
            children: [
              {
                value: '2330',
                label: '记录媒介复制',

              }
            ]
          }
        ]
      },
      {
        value: '24',
        label: '文教、工美、体育和娱乐用品制造业',
        children: [
          {
            value: '241',
            label: '文教办公用品制造',
            children: [
              {
                value: '2411',
                label: '文具制造',

              },
              {
                value: '2412',
                label: '笔的制造',

              },
              {
                value: '2413',
                label: '教学用模型及教具制造',

              },
              {
                value: '2414',
                label: '墨水、墨汁制造',

              },
              {
                value: '2419',
                label: '其他文教办公用品制造',

              }
            ]
          },
          {
            value: '242',
            label: '乐器制造',
            children: [
              {
                value: '2421',
                label: '中乐器制造',

              },
              {
                value: '2422',
                label: '西乐器制造',

              },
              {
                value: '2423',
                label: '电子乐器制造',

              },
              {
                value: '2429',
                label: '其他乐器及零件制造',

              }
            ]
          },
          {
            value: '243',
            label: '工艺美术品制造',
            children: [
              {
                value: '2431',
                label: '雕塑工艺品制造',

              },
              {
                value: '2432',
                label: '金属工艺品制造',

              },
              {
                value: '2433',
                label: '漆器工艺品制造',

              },
              {
                value: '2434',
                label: '花画工艺品制造',

              },
              {
                value: '2435',
                label: '天然植物纤维编织工艺品制造',

              },
              {
                value: '2436',
                label: '抽纱刺绣工艺品制造',

              },
              {
                value: '2437',
                label: '地毯、挂毯制造',

              },
              {
                value: '2438',
                label: '珠宝首饰及有关物品制造',

              },
              {
                value: '2439',
                label: '其他工艺美术品制造',

              }
            ]
          },
          {
            value: '244',
            label: '体育用品制造',
            children: [
              {
                value: '2441',
                label: '球类制造',

              },
              {
                value: '2442',
                label: '体育器材及配件制造',

              },
              {
                value: '2443',
                label: '训练健身器材制造',

              },
              {
                value: '2444',
                label: '运动防护用具制造',

              },
              {
                value: '2449',
                label: '其他体育用品制造',

              }
            ]
          },
          {
            value: '245',
            label: '玩具制造',
            children: [
              {
                value: '2450',
                label: '玩具制造',

              }
            ]
          },
          {
            value: '246',
            label: '游艺器材及娱乐用品制造',
            children: [
              {
                value: '2461',
                label: '露天游乐场所游乐设备制造',

              },
              {
                value: '2462',
                label: '游艺用品及室内游艺器材制造',

              },
              {
                value: '2469',
                label: '其他娱乐用品制造',

              }
            ]
          }
        ]
      },
      {
        value: '25',
        label: '石油加工、炼焦和核燃料加工业',
        children: [
          {
            value: '251',
            label: '精炼石油产品制造',
            children: [
              {
                value: '2511',
                label: '原油加工及石油制品制造',

              },
              {
                value: '2512',
                label: '人造原油制造',

              }
            ]
          },
          {
            value: '252',
            label: '炼焦',
            children: [
              {
                value: '2520',
                label: '炼焦',

              }
            ]
          },
          {
            value: '253',
            label: '核燃料加工',
            children: [
              {
                value: '2530',
                label: '核燃料加工',

              }
            ]
          }
        ]
      },
      {
        value: '26',
        label: '化学原料和化学制品制造业',
        children: [
          {
            value: '261',
            label: '基础化学原料制造',
            children: [
              {
                value: '2611',
                label: '无机酸制造',

              },
              {
                value: '2612',
                label: '无机碱制造',

              },
              {
                value: '2613',
                label: '无机盐制造',

              },
              {
                value: '2614',
                label: '有机化学原料制造',

              },
              {
                value: '2619',
                label: '其他基础化学原料制造',

              }
            ]
          },
          {
            value: '262',
            label: '肥料制造',
            children: [
              {
                value: '2621',
                label: '氮肥制造',

              },
              {
                value: '2622',
                label: '磷肥制造',

              },
              {
                value: '2623',
                label: '钾肥制造',

              },
              {
                value: '2624',
                label: '复混肥料制造',

              },
              {
                value: '2625',
                label: '有机肥料及微生物肥料制造',

              },
              {
                value: '2629',
                label: '其他肥料制造',

              }
            ]
          },
          {
            value: '263',
            label: '农药制造',
            children: [
              {
                value: '2631',
                label: '化学农药制造',

              },
              {
                value: '2632',
                label: '生物化学农药及微生物农药制造',

              }
            ]
          },
          {
            value: '264',
            label: '涂料、油墨、颜料及类似产品制造',
            children: [
              {
                value: '2641',
                label: '涂料制造',

              },
              {
                value: '2642',
                label: '油墨及类似产品制造',

              },
              {
                value: '2643',
                label: '颜料制造',

              },
              {
                value: '2644',
                label: '染料制造',

              },
              {
                value: '2645',
                label: '密封用填料及类似品制造',

              }
            ]
          },
          {
            value: '265',
            label: '合成材料制造',
            children: [
              {
                value: '2651',
                label: '初级形态塑料及合成树脂制造',

              },
              {
                value: '2652',
                label: '合成橡胶制造',

              },
              {
                value: '2653',
                label: '合成纤维单（聚合）体制造',

              },
              {
                value: '2659',
                label: '其他合成材料制造',

              }
            ]
          },
          {
            value: '266',
            label: '专用化学产品制造',
            children: [
              {
                value: '2661',
                label: '化学试剂和助剂制造',

              },
              {
                value: '2662',
                label: '专项化学用品制造',

              },
              {
                value: '2663',
                label: '林产化学产品制造',

              },
              {
                value: '2664',
                label: '信息化学品制造',

              },
              {
                value: '2665',
                label: '环境污染处理专用药剂材料制造',

              },
              {
                value: '2666',
                label: '动物胶制造',

              },
              {
                value: '2669',
                label: '其他专用化学产品制造',

              }
            ]
          },
          {
            value: '267',
            label: '炸药、火工及焰火产品制造',
            children: [
              {
                value: '2671',
                label: '炸药及火工产品制造',

              },
              {
                value: '2672',
                label: '焰火、鞭炮产品制造',

              }
            ]
          },
          {
            value: '268',
            label: '日用化学产品制造',
            children: [
              {
                value: '2681',
                label: '肥皂及合成洗涤剂制造',

              },
              {
                value: '2682',
                label: '化妆品制造',

              },
              {
                value: '2683',
                label: '口腔清洁用品制造',

              },
              {
                value: '2684',
                label: '香料、香精制造',

              },
              {
                value: '2689',
                label: '其他日用化学产品制造',

              }
            ]
          }
        ]
      },
      {
        value: '27',
        label: '医药制造业',
        children: [
          {
            value: '271',
            label: '化学药品原料药制造',
            children: [
              {
                value: '2710',
                label: '化学药品原料药制造',

              }
            ]
          },
          {
            value: '272',
            label: '化学药品制剂制造',
            children: [
              {
                value: '2720',
                label: '化学药品制剂制造',

              }
            ]
          },
          {
            value: '273',
            label: '中药饮片加工',
            children: [
              {
                value: '2730',
                label: '中药饮片加工',

              }
            ]
          },
          {
            value: '274',
            label: '中成药生产',
            children: [
              {
                value: '2740',
                label: '中成药生产',

              }
            ]
          },
          {
            value: '275',
            label: '兽用药品制造',
            children: [
              {
                value: '2750',
                label: '兽用药品制造',

              }
            ]
          },
          {
            value: '276',
            label: '生物药品制造',
            children: [
              {
                value: '2760',
                label: '生物药品制造',

              }
            ]
          },
          {
            value: '277',
            label: '卫生材料及医药用品制造',
            children: [
              {
                value: '2770',
                label: '卫生材料及医药用品制造',

              }
            ]
          }
        ]
      },
      {
        value: '28',
        label: '化学纤维制造业',
        children: [
          {
            value: '281',
            label: '纤维素纤维原料及纤维制造',
            children: [
              {
                value: '2811',
                label: '化纤浆粕制造',

              },
              {
                value: '2812',
                label: '人造纤维（纤维素纤维）制造',

              }
            ]
          },
          {
            value: '282',
            label: '合成纤维制造',
            children: [
              {
                value: '2821',
                label: '锦纶纤维制造',

              },
              {
                value: '2822',
                label: '涤纶纤维制造',

              },
              {
                value: '2823',
                label: '腈纶纤维制造',

              },
              {
                value: '2824',
                label: '维纶纤维制造',

              },
              {
                value: '2825',
                label: '丙纶纤维制造',

              },
              {
                value: '2826',
                label: '氨纶纤维制造',

              },
              {
                value: '2829',
                label: '其他合成纤维制造',

              }
            ]
          }
        ]
      },
      {
        value: '29',
        label: '橡胶和塑料制品业',
        children: [
          {
            value: '291',
            label: '橡胶制品业',
            children: [
              {
                value: '2911',
                label: '轮胎制造',

              },
              {
                value: '2912',
                label: '橡胶板、管、带制造',

              },
              {
                value: '2913',
                label: '橡胶零件制造',

              },
              {
                value: '2914',
                label: '再生橡胶制造',

              },
              {
                value: '2915',
                label: '日用及医用橡胶制品制造',

              },
              {
                value: '2919',
                label: '其他橡胶制品制造',

              }
            ]
          },
          {
            value: '292',
            label: '塑料制品业',
            children: [
              {
                value: '2921',
                label: '塑料薄膜制造',

              },
              {
                value: '2922',
                label: '塑料板、管、型材制造',

              },
              {
                value: '2923',
                label: '塑料丝、绳及编织品制造',

              },
              {
                value: '2924',
                label: '泡沫塑料制造',

              },
              {
                value: '2925',
                label: '塑料人造革、合成革制造',

              },
              {
                value: '2926',
                label: '塑料包装箱及容器制造',

              },
              {
                value: '2927',
                label: '日用塑料制品制造',

              },
              {
                value: '2928',
                label: '塑料零件制造',

              },
              {
                value: '2929',
                label: '其他塑料制品制造',

              }
            ]
          }
        ]
      },
      {
        value: '30',
        label: '非金属矿物制品业',
        children: [
          {
            value: '301',
            label: '水泥、石灰和石膏制造',
            children: [
              {
                value: '3011',
                label: '水泥制造',

              },
              {
                value: '3012',
                label: '石灰和石膏制造',

              }
            ]
          },
          {
            value: '302',
            label: '石膏、水泥制品及类似制品制造',
            children: [
              {
                value: '3021',
                label: '水泥制品制造',

              },
              {
                value: '3022',
                label: '砼结构构件制造',

              },
              {
                value: '3023',
                label: '石棉水泥制品制造',

              },
              {
                value: '3024',
                label: '轻质建筑材料制造',

              },
              {
                value: '3029',
                label: '其他水泥类似制品制造',

              }
            ]
          },
          {
            value: '303',
            label: '砖瓦、石材等建筑材料制造',
            children: [
              {
                value: '3031',
                label: '粘土砖瓦及建筑砌块制造',

              },
              {
                value: '3032',
                label: '建筑陶瓷制品制造',

              },
              {
                value: '3033',
                label: '建筑用石加工',

              },
              {
                value: '3034',
                label: '防水建筑材料制造',

              },
              {
                value: '3035',
                label: '隔热和隔音材料制造',

              },
              {
                value: '3039',
                label: '其他建筑材料制造',

              }
            ]
          },
          {
            value: '304',
            label: '玻璃制造',
            children: [
              {
                value: '3041',
                label: '平板玻璃制造',

              },
              {
                value: '3049',
                label: '其他玻璃制造',

              }
            ]
          },
          {
            value: '305',
            label: '玻璃制品制造',
            children: [
              {
                value: '3051',
                label: '技术玻璃制品制造',

              },
              {
                value: '3052',
                label: '光学玻璃制造',

              },
              {
                value: '3053',
                label: '玻璃仪器制造',

              },
              {
                value: '3054',
                label: '日用玻璃制品制造',

              },
              {
                value: '3055',
                label: '玻璃包装容器制造',

              },
              {
                value: '3056',
                label: '玻璃保温容器制造',

              },
              {
                value: '3057',
                label: '制镜及类似品加工',

              },
              {
                value: '3059',
                label: '其他玻璃制品制造',

              }
            ]
          },
          {
            value: '306',
            label: '玻璃纤维和玻璃纤维增强塑料制品制造',
            children: [
              {
                value: '3061',
                label: '玻璃纤维及制品制造',

              },
              {
                value: '3062',
                label: '玻璃纤维增强塑料制品制造',

              }
            ]
          },
          {
            value: '307',
            label: '陶瓷制品制造',
            children: [
              {
                value: '3071',
                label: '卫生陶瓷制品制造',

              },
              {
                value: '3072',
                label: '特种陶瓷制品制造',

              },
              {
                value: '3073',
                label: '日用陶瓷制品制造',

              },
              {
                value: '3079',
                label: '园林、陈设艺术及其他陶瓷制品制造',

              }
            ]
          },
          {
            value: '308',
            label: '耐火材料制品制造',
            children: [
              {
                value: '3081',
                label: '石棉制品制造',

              },
              {
                value: '3082',
                label: '云母制品制造',

              },
              {
                value: '3089',
                label: '耐火陶瓷制品及其他耐火材料制造',

              }
            ]
          },
          {
            value: '309',
            label: '石墨及其他非金属矿物制品制造',
            children: [
              {
                value: '3091',
                label: '石墨及碳素制品制造',

              },
              {
                value: '3099',
                label: '其他非金属矿物制品制造',

              }
            ]
          }
        ]
      },
      {
        value: '31',
        label: '黑色金属冶炼和压延加工业',
        children: [
          {
            value: '311',
            label: '炼铁',
            children: [
              {
                value: '3110',
                label: '炼铁',

              }
            ]
          },
          {
            value: '312',
            label: '炼钢',
            children: [
              {
                value: '3120',
                label: '炼钢',

              }
            ]
          },
          {
            value: '313',
            label: '黑色金属铸造',
            children: [
              {
                value: '3130',
                label: '黑色金属铸造',

              }
            ]
          },
          {
            value: '314',
            label: '钢压延加工',
            children: [
              {
                value: '3140',
                label: '钢压延加工',

              }
            ]
          },
          {
            value: '315',
            label: '铁合金冶炼',
            children: [
              {
                value: '3150',
                label: '铁合金冶炼',

              }
            ]
          }
        ]
      },
      {
        value: '32',
        label: '有色金属冶炼和压延加工业',
        children: [
          {
            value: '321',
            label: '常用有色金属冶炼',
            children: [
              {
                value: '3211',
                label: '铜冶炼',

              },
              {
                value: '3212',
                label: '铅锌冶炼',

              },
              {
                value: '3213',
                label: '镍钴冶炼',

              },
              {
                value: '3214',
                label: '锡冶炼',

              },
              {
                value: '3215',
                label: '锑冶炼',

              },
              {
                value: '3216',
                label: '铝冶炼',

              },
              {
                value: '3217',
                label: '镁冶炼',

              },
              {
                value: '3219',
                label: '其他常用有色金属冶炼',

              }
            ]
          },
          {
            value: '322',
            label: '贵金属冶炼',
            children: [
              {
                value: '3221',
                label: '金冶炼',

              },
              {
                value: '3222',
                label: '银冶炼',

              },
              {
                value: '3229',
                label: '其他贵金属冶炼',

              }
            ]
          },
          {
            value: '323',
            label: '稀有稀土金属冶炼',
            children: [
              {
                value: '3231',
                label: '钨钼冶炼',

              },
              {
                value: '3232',
                label: '稀土金属冶炼',

              },
              {
                value: '3239',
                label: '其他稀有金属冶炼',

              }
            ]
          },
          {
            value: '324',
            label: '有色金属合金制造',
            children: [
              {
                value: '3240',
                label: '有色金属合金制造',

              }
            ]
          },
          {
            value: '325',
            label: '有色金属铸造',
            children: [
              {
                value: '3250',
                label: '有色金属铸造',

              }
            ]
          },
          {
            value: '326',
            label: '有色金属压延加工',
            children: [
              {
                value: '3261',
                label: '铜压延加工',

              },
              {
                value: '3262',
                label: '铝压延加工',

              },
              {
                value: '3263',
                label: '贵金属压延加工',

              },
              {
                value: '3264',
                label: '稀有稀土金属压延加工',

              },
              {
                value: '3269',
                label: '其他有色金属压延加工',

              }
            ]
          }
        ]
      },
      {
        value: '33',
        label: '金属制品业',
        children: [
          {
            value: '331',
            label: '结构性金属制品制造',
            children: [
              {
                value: '3311',
                label: '金属结构制造',

              },
              {
                value: '3312',
                label: '金属门窗制造',

              }
            ]
          },
          {
            value: '332',
            label: '金属工具制造',
            children: [
              {
                value: '3321',
                label: '切削工具制造',

              },
              {
                value: '3322',
                label: '手工具制造',

              },
              {
                value: '3323',
                label: '农用及园林用金属工具制造',

              },
              {
                value: '3324',
                label: '刀剪及类似日用金属工具制造',

              },
              {
                value: '3329',
                label: '其他金属工具制造',

              }
            ]
          },
          {
            value: '333',
            label: '集装箱及金属包装容器制造',
            children: [
              {
                value: '3331',
                label: '集装箱制造',

              },
              {
                value: '3332',
                label: '金属压力容器制造',

              },
              {
                value: '3333',
                label: '金属包装容器制造',

              }
            ]
          },
          {
            value: '334',
            label: '金属丝绳及其制品制造',
            children: [
              {
                value: '3340',
                label: '金属丝绳及其制品制造',

              }
            ]
          },
          {
            value: '335',
            label: '建筑、安全用金属制品制造',
            children: [
              {
                value: '3351',
                label: '建筑、家具用金属配件制造',

              },
              {
                value: '3352',
                label: '建筑装饰及水暖管道零件制造',

              },
              {
                value: '3353',
                label: '安全、消防用金属制品制造',

              },
              {
                value: '3359',
                label: '其他建筑、安全用金属制品制造',

              }
            ]
          },
          {
            value: '336',
            label: '金属表面处理及热处理加工',
            children: [
              {
                value: '3360',
                label: '金属表面处理及热处理加工',

              }
            ]
          },
          {
            value: '337',
            label: '搪瓷制品制造',
            children: [
              {
                value: '3371',
                label: '生产专用搪瓷制品制造',

              },
              {
                value: '3372',
                label: '建筑装饰搪瓷制品制造',

              },
              {
                value: '3373',
                label: '搪瓷卫生洁具制造',

              },
              {
                value: '3379',
                label: '搪瓷日用品及其他搪瓷制品制造',

              }
            ]
          },
          {
            value: '338',
            label: '金属制日用品制造',
            children: [
              {
                value: '3381',
                label: '金属制厨房用器具制造',

              },
              {
                value: '3382',
                label: '金属制餐具和器皿制造',

              },
              {
                value: '3383',
                label: '金属制卫生器具制造',

              },
              {
                value: '3389',
                label: '其他金属制日用品制造',

              }
            ]
          },
          {
            value: '339',
            label: '其他金属制品制造',
            children: [
              {
                value: '3391',
                label: '锻件及粉末冶金制品制造',

              },
              {
                value: '3392',
                label: '交通及公共管理用金属标牌制造',

              },
              {
                value: '3399',
                label: '其他未列明金属制品制造',

              }
            ]
          }
        ]
      },
      {
        value: '34',
        label: '通用设备制造业',
        children: [
          {
            value: '341',
            label: '锅炉及原动设备制造',
            children: [
              {
                value: '3411',
                label: '锅炉及辅助设备制造',

              },
              {
                value: '3412',
                label: '内燃机及配件制造',

              },
              {
                value: '3413',
                label: '汽轮机及辅机制造',

              },
              {
                value: '3414',
                label: '水轮机及辅机制造',

              },
              {
                value: '3415',
                label: '风能原动设备制造',

              },
              {
                value: '3419',
                label: '其他原动设备制造',

              }
            ]
          },
          {
            value: '342',
            label: '金属加工机械制造',
            children: [
              {
                value: '3421',
                label: '金属切削机床制造',

              },
              {
                value: '3422',
                label: '金属成形机床制造',

              },
              {
                value: '3423',
                label: '铸造机械制造',

              },
              {
                value: '3424',
                label: '金属切割及焊接设备制造',

              },
              {
                value: '3425',
                label: '机床附件制造',

              },
              {
                value: '3429',
                label: '其他金属加工机械制造',

              }
            ]
          },
          {
            value: '343',
            label: '物料搬运设备制造',
            children: [
              {
                value: '3431',
                label: '轻小型起重设备制造',

              },
              {
                value: '3432',
                label: '起重机制造',

              },
              {
                value: '3433',
                label: '生产专用车辆制造',

              },
              {
                value: '3434',
                label: '连续搬运设备制造',

              },
              {
                value: '3435',
                label: '电梯、自动扶梯及升降机制造',

              },
              {
                value: '3439',
                label: '其他物料搬运设备制造',

              }
            ]
          },
          {
            value: '344',
            label: '泵、阀门、压缩机及类似机械制造',
            children: [
              {
                value: '3441',
                label: '泵及真空设备制造',

              },
              {
                value: '3442',
                label: '气体压缩机械制造',

              },
              {
                value: '3443',
                label: '阀门和旋塞制造',

              },
              {
                value: '3444',
                label: '液压和气压动力机械及元件制造',

              }
            ]
          },
          {
            value: '345',
            label: '轴承、齿轮和传动部件制造',
            children: [
              {
                value: '3451',
                label: '轴承制造',

              },
              {
                value: '3452',
                label: '齿轮及齿轮减、变速箱制造',

              },
              {
                value: '3459',
                label: '其他传动部件制造',

              }
            ]
          },
          {
            value: '346',
            label: '烘炉、风机、衡器、包装等设备制造',
            children: [
              {
                value: '3461',
                label: '烘炉、熔炉及电炉制造',

              },
              {
                value: '3462',
                label: '风机、风扇制造',

              },
              {
                value: '3463',
                label: '气体、液体分离及纯净设备制造',

              },
              {
                value: '3464',
                label: '制冷、空调设备制造',

              },
              {
                value: '3465',
                label: '风动和电动工具制造',

              },
              {
                value: '3466',
                label: '喷枪及类似器具制造',

              },
              {
                value: '3467',
                label: '衡器制造',

              },
              {
                value: '3468',
                label: '包装专用设备制造',

              }
            ]
          },
          {
            value: '347',
            label: '文化、办公用机械制造',
            children: [
              {
                value: '3471',
                label: '电影机械制造',

              },
              {
                value: '3472',
                label: '幻灯及投影设备制造',

              },
              {
                value: '3473',
                label: '照相机及器材制造',

              },
              {
                value: '3474',
                label: '复印和胶印设备制造',

              },
              {
                value: '3475',
                label: '计算器及货币专用设备制造',

              },
              {
                value: '3479',
                label: '其他文化、办公用机械制造',

              }
            ]
          },
          {
            value: '348',
            label: '通用零部件制造',
            children: [
              {
                value: '3481',
                label: '金属密封件制造',

              },
              {
                value: '3482',
                label: '紧固件制造',

              },
              {
                value: '3483',
                label: '弹簧制造',

              },
              {
                value: '3484',
                label: '机械零部件加工',

              },
              {
                value: '3489',
                label: '其他通用零部件制造',

              }
            ]
          },
          {
            value: '349',
            label: '其他通用设备制造业',
            children: [
              {
                value: '3490',
                label: '其他通用设备制造业',

              }
            ]
          }
        ]
      },
      {
        value: '35',
        label: '专用设备制造业',
        children: [
          {
            value: '351',
            label: '采矿、冶金、建筑专用设备制造',
            children: [
              {
                value: '3511',
                label: '矿山机械制造',

              },
              {
                value: '3512',
                label: '石油钻采专用设备制造',

              },
              {
                value: '3513',
                label: '建筑工程用机械制造',

              },
              {
                value: '3514',
                label: '海洋工程专用设备制造',

              },
              {
                value: '3515',
                label: '建筑材料生产专用机械制造',

              },
              {
                value: '3516',
                label: '冶金专用设备制造',

              }
            ]
          },
          {
            value: '352',
            label: '化工、木材、非金属加工专用设备制造',
            children: [
              {
                value: '3521',
                label: '炼油、化工生产专用设备制造',

              },
              {
                value: '3522',
                label: '橡胶加工专用设备制造',

              },
              {
                value: '3523',
                label: '塑料加工专用设备制造',

              },
              {
                value: '3524',
                label: '木材加工机械制造',

              },
              {
                value: '3525',
                label: '模具制造',

              },
              {
                value: '3529',
                label: '其他非金属加工专用设备制造',

              }
            ]
          },
          {
            value: '353',
            label: '食品、饮料、烟草及饲料生产专用设备制造',
            children: [
              {
                value: '3531',
                label: '食品、酒、饮料及茶生产专用设备制造',

              },
              {
                value: '3532',
                label: '农副食品加工专用设备制造',

              },
              {
                value: '3533',
                label: '烟草生产专用设备制造',

              },
              {
                value: '3534',
                label: '饲料生产专用设备制造',

              }
            ]
          },
          {
            value: '354',
            label: '印刷、制药、日化及日用品生产专用设备制造',
            children: [
              {
                value: '3541',
                label: '制浆和造纸专用设备制造',

              },
              {
                value: '3542',
                label: '印刷专用设备制造',

              },
              {
                value: '3543',
                label: '日用化工专用设备制造',

              },
              {
                value: '3544',
                label: '制药专用设备制造',

              },
              {
                value: '3545',
                label: '照明器具生产专用设备制造',

              },
              {
                value: '3546',
                label: '玻璃、陶瓷和搪瓷制品生产专用设备制造',

              },
              {
                value: '3549',
                label: '其他日用品生产专用设备制造',

              }
            ]
          },
          {
            value: '355',
            label: '纺织、服装和皮革加工专用设备制造',
            children: [
              {
                value: '3551',
                label: '纺织专用设备制造',

              },
              {
                value: '3552',
                label: '皮革、毛皮及其制品加工专用设备制造',

              },
              {
                value: '3553',
                label: '缝制机械制造',

              },
              {
                value: '3554',
                label: '洗涤机械制造',

              }
            ]
          },
          {
            value: '356',
            label: '电子和电工机械专用设备制造',
            children: [
              {
                value: '3561',
                label: '电工机械专用设备制造',

              },
              {
                value: '3562',
                label: '电子工业专用设备制造',

              }
            ]
          },
          {
            value: '357',
            label: '农、林、牧、渔专用机械制造',
            children: [
              {
                value: '3571',
                label: '拖拉机制造',

              },
              {
                value: '3572',
                label: '机械化农业及园艺机具制造',

              },
              {
                value: '3573',
                label: '营林及木竹采伐机械制造',

              },
              {
                value: '3574',
                label: '畜牧机械制造',

              },
              {
                value: '3575',
                label: '渔业机械制造',

              },
              {
                value: '3576',
                label: '农林牧渔机械配件制造',

              },
              {
                value: '3577',
                label: '棉花加工机械制造',

              },
              {
                value: '3579',
                label: '其他农、林、牧、渔业机械制造',

              }
            ]
          },
          {
            value: '358',
            label: '医疗仪器设备及器械制造',
            children: [
              {
                value: '3581',
                label: '医疗诊断、监护及治疗设备制造',

              },
              {
                value: '3582',
                label: '口腔科用设备及器具制造',

              },
              {
                value: '3583',
                label: '医疗实验室及医用消毒设备和器具制造',

              },
              {
                value: '3584',
                label: '医疗、外科及兽医用器械制造',

              },
              {
                value: '3585',
                label: '机械治疗及病房护理设备制造',

              },
              {
                value: '3586',
                label: '假肢、人工器官及植（介）入器械制造',

              },
              {
                value: '3589',
                label: '其他医疗设备及器械制造',

              }
            ]
          },
          {
            value: '359',
            label: '环保、社会公共服务及其他专用设备制造',
            children: [
              {
                value: '3591',
                label: '环境保护专用设备制造',

              },
              {
                value: '3592',
                label: '地质勘查专用设备制造',

              },
              {
                value: '3593',
                label: '邮政专用机械及器材制造',

              },
              {
                value: '3594',
                label: '商业、饮食、服务专用设备制造',

              },
              {
                value: '3595',
                label: '社会公共安全设备及器材制造',

              },
              {
                value: '3596',
                label: '交通安全、管制及类似专用设备制造',

              },
              {
                value: '3597',
                label: '水资源专用机械制造',

              },
              {
                value: '3599',
                label: '其他专用设备制造',

              }
            ]
          }
        ]
      },
      {
        value: '36',
        label: '汽车制造业',
        children: [
          {
            value: '361',
            label: '汽车整车制造',
            children: [
              {
                value: '3610',
                label: '汽车整车制造',

              }
            ]
          },
          {
            value: '362',
            label: '改装汽车制造',
            children: [
              {
                value: '3620',
                label: '改装汽车制造',

              }
            ]
          },
          {
            value: '363',
            label: '低速载货汽车制造',
            children: [
              {
                value: '3630',
                label: '低速载货汽车制造',

              }
            ]
          },
          {
            value: '364',
            label: '电车制造',
            children: [
              {
                value: '3640',
                label: '电车制造',

              }
            ]
          },
          {
            value: '365',
            label: '汽车车身、挂车制造',
            children: [
              {
                value: '3650',
                label: '汽车车身、挂车制造',

              }
            ]
          },
          {
            value: '366',
            label: '汽车零部件及配件制造',
            children: [
              {
                value: '3660',
                label: '汽车零部件及配件制造',

              }
            ]
          }
        ]
      },
      {
        value: '37',
        label: '铁路、船舶、航空航天和其他运输设备制造业',
        children: [
          {
            value: '371',
            label: '铁路运输设备制造',
            children: [
              {
                value: '3711',
                label: '铁路机车车辆及动车组制造',

              },
              {
                value: '3712',
                label: '窄轨机车车辆制造',

              },
              {
                value: '3713',
                label: '铁路机车车辆配件制造',

              },
              {
                value: '3714',
                label: '铁路专用设备及器材、配件制造',

              },
              {
                value: '3719',
                label: '其他铁路运输设备制造',

              }
            ]
          },
          {
            value: '372',
            label: '城市轨道交通设备制造',
            children: [
              {
                value: '3720',
                label: '城市轨道交通设备制造',

              }
            ]
          },
          {
            value: '373',
            label: '船舶及相关装置制造',
            children: [
              {
                value: '3731',
                label: '金属船舶制造',

              },
              {
                value: '3732',
                label: '非金属船舶制造',

              },
              {
                value: '3733',
                label: '娱乐船和运动船制造',

              },
              {
                value: '3734',
                label: '船用配套设备制造',

              },
              {
                value: '3735',
                label: '船舶改装与拆除',

              },
              {
                value: '3739',
                label: '航标器材及其他相关装置制造',

              }
            ]
          },
          {
            value: '374',
            label: '航空、航天器及设备制造',
            children: [
              {
                value: '3741',
                label: '飞机制造',

              },
              {
                value: '3742',
                label: '航天器制造',

              },
              {
                value: '3743',
                label: '航空、航天相关设备制造',

              },
              {
                value: '3749',
                label: '其他航空航天器制造',

              }
            ]
          },
          {
            value: '375',
            label: '摩托车制造',
            children: [
              {
                value: '3751',
                label: '摩托车整车制造',

              },
              {
                value: '3752',
                label: '摩托车零部件及配件制造',

              }
            ]
          },
          {
            value: '376',
            label: '自行车制造',
            children: [
              {
                value: '3761',
                label: '脚踏自行车及残疾人座车制造',

              },
              {
                value: '3762',
                label: '助动自行车制造',

              }
            ]
          },
          {
            value: '377',
            label: '非公路休闲车及零配件制造',
            children: [
              {
                value: '3770',
                label: '非公路休闲车及零配件制造',

              }
            ]
          },
          {
            value: '379',
            label: '潜水救捞及其他未列明运输设备制造',
            children: [
              {
                value: '3791',
                label: '潜水及水下救捞装备制造',

              },
              {
                value: '3799',
                label: '其他未列明运输设备制造',

              }
            ]
          }
        ]
      },
      {
        value: '38',
        label: '电气机械和器材制造业',
        children: [
          {
            value: '381',
            label: '电机制造',
            children: [
              {
                value: '3811',
                label: '发电机及发电机组制造',

              },
              {
                value: '3812',
                label: '电动机制造',

              },
              {
                value: '3819',
                label: '微电机及其他电机制造',

              }
            ]
          },
          {
            value: '382',
            label: '输配电及控制设备制造',
            children: [
              {
                value: '3821',
                label: '变压器、整流器和电感器制造',

              },
              {
                value: '3822',
                label: '电容器及其配套设备制造',

              },
              {
                value: '3823',
                label: '配电开关控制设备制造',

              },
              {
                value: '3824',
                label: '电力电子元器件制造',

              },
              {
                value: '3825',
                label: '光伏设备及元器件制造',

              },
              {
                value: '3829',
                label: '其他输配电及控制设备制造',

              }
            ]
          },
          {
            value: '383',
            label: '电线、电缆、光缆及电工器材制造',
            children: [
              {
                value: '3831',
                label: '电线、电缆制造',

              },
              {
                value: '3832',
                label: '光纤、光缆制造',

              },
              {
                value: '3833',
                label: '绝缘制品制造',

              },
              {
                value: '3839',
                label: '其他电工器材制造',

              }
            ]
          },
          {
            value: '384',
            label: '电池制造',
            children: [
              {
                value: '3841',
                label: '锂离子电池制造',

              },
              {
                value: '3842',
                label: '镍氢电池制造',

              },
              {
                value: '3849',
                label: '其他电池制造',

              }
            ]
          },
          {
            value: '385',
            label: '家用电力器具制造',
            children: [
              {
                value: '3851',
                label: '家用制冷电器具制造',

              },
              {
                value: '3852',
                label: '家用空气调节器制造',

              },
              {
                value: '3853',
                label: '家用通风电器具制造',

              },
              {
                value: '3854',
                label: '家用厨房电器具制造',

              },
              {
                value: '3855',
                label: '家用清洁卫生电器具制造',

              },
              {
                value: '3856',
                label: '家用美容、保健电器具制造',

              },
              {
                value: '3857',
                label: '家用电力器具专用配件制造',

              },
              {
                value: '3859',
                label: '其他家用电力器具制造',

              }
            ]
          },
          {
            value: '386',
            label: '非电力家用器具制造',
            children: [
              {
                value: '3861',
                label: '燃气、太阳能及类似能源家用器具制造',

              },
              {
                value: '3869',
                label: '其他非电力家用器具制造',

              }
            ]
          },
          {
            value: '387',
            label: '照明器具制造',
            children: [
              {
                value: '3871',
                label: '电光源制造',

              },
              {
                value: '3872',
                label: '照明灯具制造',

              },
              {
                value: '3879',
                label: '灯用电器附件及其他照明器具制造',

              }
            ]
          },
          {
            value: '389',
            label: '其他电气机械及器材制造',
            children: [
              {
                value: '3891',
                label: '电气信号设备装置制造',

              },
              {
                value: '3899',
                label: '其他未列明电气机械及器材制造',

              }
            ]
          }
        ]
      },
      {
        value: '39',
        label: '计算机、通信和其他电子设备制造业',
        children: [
          {
            value: '391',
            label: '计算机制造',
            children: [
              {
                value: '3911',
                label: '计算机整机制造',

              },
              {
                value: '3912',
                label: '计算机零部件制造',

              },
              {
                value: '3913',
                label: '计算机外围设备制造',

              },
              {
                value: '3919',
                label: '其他计算机制造',

              }
            ]
          },
          {
            value: '392',
            label: '通信设备制造',
            children: [
              {
                value: '3921',
                label: '通信系统设备制造',

              },
              {
                value: '3922',
                label: '通信终端设备制造',

              }
            ]
          },
          {
            value: '393',
            label: '广播电视设备制造',
            children: [
              {
                value: '3931',
                label: '广播电视节目制作及发射设备制造',

              },
              {
                value: '3932',
                label: '广播电视接收设备及器材制造',

              },
              {
                value: '3939',
                label: '应用电视设备及其他广播电视设备制造',

              }
            ]
          },
          {
            value: '394',
            label: '雷达及配套设备制造',
            children: [
              {
                value: '3940',
                label: '雷达及配套设备制造',

              }
            ]
          },
          {
            value: '395',
            label: '视听设备制造',
            children: [
              {
                value: '3951',
                label: '电视机制造',

              },
              {
                value: '3952',
                label: '音响设备制造',

              },
              {
                value: '3953',
                label: '影视录放设备制造',

              }
            ]
          },
          {
            value: '396',
            label: '电子器件制造',
            children: [
              {
                value: '3961',
                label: '电子真空器件制造',

              },
              {
                value: '3962',
                label: '半导体分立器件制造',

              },
              {
                value: '3963',
                label: '集成电路制造',

              },
              {
                value: '3969',
                label: '光电子器件及其他电子器件制造',

              }
            ]
          },
          {
            value: '397',
            label: '电子元件制造',
            children: [
              {
                value: '3971',
                label: '电子元件及组件制造',

              },
              {
                value: '3972',
                label: '印制电路板制造',

              }
            ]
          },
          {
            value: '399',
            label: '其他电子设备制造',
            children: [
              {
                value: '3990',
                label: '其他电子设备制造',

              }
            ]
          }
        ]
      },
      {
        value: '40',
        label: '仪器仪表制造业',
        children: [
          {
            value: '401',
            label: '通用仪器仪表制造',
            children: [
              {
                value: '4011',
                label: '工业自动控制系统装置制造',

              },
              {
                value: '4012',
                label: '电工仪器仪表制造',

              },
              {
                value: '4013',
                label: '绘图、计算及测量仪器制造',

              },
              {
                value: '4014',
                label: '实验分析仪器制造',

              },
              {
                value: '4015',
                label: '试验机制造',

              },
              {
                value: '4019',
                label: '供应用仪表及其他通用仪器制造',

              }
            ]
          },
          {
            value: '402',
            label: '专用仪器仪表制造',
            children: [
              {
                value: '4021',
                label: '环境监测专用仪器仪表制造',

              },
              {
                value: '4022',
                label: '运输设备及生产用计数仪表制造',

              },
              {
                value: '4023',
                label: '导航、气象及海洋专用仪器制造',

              },
              {
                value: '4024',
                label: '农林牧渔专用仪器仪表制造',

              },
              {
                value: '4025',
                label: '地质勘探和地震专用仪器制造',

              },
              {
                value: '4026',
                label: '教学专用仪器制造',

              },
              {
                value: '4027',
                label: '核子及核辐射测量仪器制造',

              },
              {
                value: '4028',
                label: '电子测量仪器制造',

              },
              {
                value: '4029',
                label: '其他专用仪器制造',

              }
            ]
          },
          {
            value: '403',
            label: '钟表与计时仪器制造',
            children: [
              {
                value: '4030',
                label: '钟表与计时仪器制造',

              }
            ]
          },
          {
            value: '404',
            label: '光学仪器及眼镜制造',
            children: [
              {
                value: '4041',
                label: '光学仪器制造',

              },
              {
                value: '4042',
                label: '眼镜制造',

              }
            ]
          },
          {
            value: '409',
            label: '其他仪器仪表制造业',
            children: [
              {
                value: '4090',
                label: '其他仪器仪表制造业',

              }
            ]
          }
        ]
      },
      {
        value: '41',
        label: '其他制造业',
        children: [
          {
            value: '411',
            label: '日用杂品制造',
            children: [
              {
                value: '4111',
                label: '鬃毛加工、制刷及清扫工具制造',

              },
              {
                value: '4119',
                label: '其他日用杂品制造',

              }
            ]
          },
          {
            value: '412',
            label: '煤制品制造',
            children: [
              {
                value: '4120',
                label: '煤制品制造',

              }
            ]
          },
          {
            value: '413',
            label: '核辐射加工',
            children: [
              {
                value: '4130',
                label: '核辐射加工',

              }
            ]
          },
          {
            value: '419',
            label: '其他未列明制造业',
            children: [
              {
                value: '4190',
                label: '其他未列明制造业',

              }
            ]
          }
        ]
      },
      {
        value: '42',
        label: '废弃资源综合利用业',
        children: [
          {
            value: '421',
            label: '金属废料和碎屑加工处理',
            children: [
              {
                value: '4210',
                label: '金属废料和碎屑加工处理',

              }
            ]
          },
          {
            value: '422',
            label: '非金属废料和碎屑加工处理',
            children: [
              {
                value: '4220',
                label: '非金属废料和碎屑加工处理',

              }
            ]
          }
        ]
      },
      {
        value: '43',
        label: '金属制品、机械和设备修理业',
        children: [
          {
            value: '431',
            label: '金属制品修理',
            children: [
              {
                value: '4310',
                label: '金属制品修理',

              }
            ]
          },
          {
            value: '432',
            label: '通用设备修理',
            children: [
              {
                value: '4320',
                label: '通用设备修理',

              }
            ]
          },
          {
            value: '433',
            label: '专用设备修理',
            children: [
              {
                value: '4330',
                label: '专用设备修理',

              }
            ]
          },
          {
            value: '434',
            label: '铁路、船舶、航空航天等运输设备修理',
            children: [
              {
                value: '4341',
                label: '铁路运输设备修理',

              },
              {
                value: '4342',
                label: '船舶修理',

              },
              {
                value: '4343',
                label: '航空航天器修理',

              },
              {
                value: '4349',
                label: '其他运输设备修理',

              }
            ]
          },
          {
            value: '435',
            label: '电气设备修理',
            children: [
              {
                value: '4350',
                label: '电气设备修理',

              }
            ]
          },
          {
            value: '436',
            label: '仪器仪表修理',
            children: [
              {
                value: '4360',
                label: '仪器仪表修理',

              }
            ]
          },
          {
            value: '439',
            label: '其他机械和设备修理业',
            children: [
              {
                value: '4390',
                label: '其他机械和设备修理业',

              }
            ]
          }
        ]
      }
    ]
  },
  {
    value: 'D',
    label: '电力、热力、燃气及水生产和供应业',
    children: [
      {
        value: '44',
        label: '电力、热力生产和供应业',
        children: [
          {
            value: '441',
            label: '电力生产',
            children: [
              {
                value: '4411',
                label: '火力发电',

              },
              {
                value: '4412',
                label: '水力发电',

              },
              {
                value: '4413',
                label: '核力发电',

              },
              {
                value: '4414',
                label: '风力发电',

              },
              {
                value: '4415',
                label: '太阳能发电',

              },
              {
                value: '4419',
                label: '其他电力生产',

              }
            ]
          },
          {
            value: '442',
            label: '电力供应',
            children: [
              {
                value: '4420',
                label: '电力供应',

              }
            ]
          },
          {
            value: '443',
            label: '热力生产和供应',
            children: [
              {
                value: '4430',
                label: '热力生产和供应',

              }
            ]
          }
        ]
      },
      {
        value: '45',
        label: '燃气生产和供应业',
        children: [
          {
            value: '450',
            label: '燃气生产和供应业',
            children: [
              {
                value: '4500',
                label: '燃气生产和供应业',

              }
            ]
          }
        ]
      },
      {
        value: '46',
        label: '水的生产和供应业',
        children: [
          {
            value: '461',
            label: '自来水生产和供应',
            children: [
              {
                value: '4610',
                label: '自来水生产和供应',

              }
            ]
          },
          {
            value: '462',
            label: '污水处理及其再生利用',
            children: [
              {
                value: '4620',
                label: '污水处理及其再生利用',

              }
            ]
          },
          {
            value: '469',
            label: '其他水的处理、利用与分配',
            children: [
              {
                value: '4690',
                label: '其他水的处理、利用与分配',

              }
            ]
          }
        ]
      }
    ]
  },
  {
    value: 'E',
    label: '建筑业',
    children: [
      {
        value: '47',
        label: '房屋建筑业',
        children: [
          {
            value: '470',
            label: '房屋建筑业',
            children: [
              {
                value: '4700',
                label: '房屋建筑业',

              }
            ]
          }
        ]
      },
      {
        value: '48',
        label: '土木工程建筑业',
        children: [
          {
            value: '481',
            label: '铁路、道路、隧道和桥梁工程建筑',
            children: [
              {
                value: '4811',
                label: '铁路工程建筑',

              },
              {
                value: '4812',
                label: '公路工程建筑',

              },
              {
                value: '4813',
                label: '市政道路工程建筑',

              },
              {
                value: '4819',
                label: '其他道路、隧道和桥梁工程建筑',

              }
            ]
          },
          {
            value: '482',
            label: '水利和内河港口工程建筑',
            children: [
              {
                value: '4821',
                label: '水源及供水设施工程建筑',

              },
              {
                value: '4822',
                label: '河湖治理及防洪设施工程建筑',

              },
              {
                value: '4823',
                label: '港口及航运设施工程建筑',

              }
            ]
          },
          {
            value: '483',
            label: '海洋工程建筑',
            children: [
              {
                value: '4830',
                label: '海洋工程建筑',

              }
            ]
          },
          {
            value: '484',
            label: '工矿工程建筑',
            children: [
              {
                value: '4840',
                label: '工矿工程建筑',

              }
            ]
          },
          {
            value: '485',
            label: '架线和管道工程建筑',
            children: [
              {
                value: '4851',
                label: '架线及设备工程建筑',

              },
              {
                value: '4852',
                label: '管道工程建筑',

              }
            ]
          },
          {
            value: '489',
            label: '其他土木工程建筑',
            children: [
              {
                value: '4890',
                label: '其他土木工程建筑',

              }
            ]
          }
        ]
      },
      {
        value: '49',
        label: '建筑安装业',
        children: [
          {
            value: '491',
            label: '电气安装',
            children: [
              {
                value: '4910',
                label: '电气安装',

              }
            ]
          },
          {
            value: '492',
            label: '管道和设备安装',
            children: [
              {
                value: '4920',
                label: '管道和设备安装',

              }
            ]
          },
          {
            value: '499',
            label: '其他建筑安装业',
            children: [
              {
                value: '4990',
                label: '其他建筑安装业',

              }
            ]
          }
        ]
      },
      {
        value: '50',
        label: '建筑装饰和其他建筑业',
        children: [
          {
            value: '501',
            label: '建筑装饰业',
            children: [
              {
                value: '5010',
                label: '建筑装饰业',

              }
            ]
          },
          {
            value: '502',
            label: '工程准备活动',
            children: [
              {
                value: '5021',
                label: '建筑物拆除活动',

              },
              {
                value: '5029',
                label: '其他工程准备活动',

              }
            ]
          },
          {
            value: '503',
            label: '提供施工设备服务',
            children: [
              {
                value: '5030',
                label: '提供施工设备服务',

              }
            ]
          },
          {
            value: '509',
            label: '其他未列明建筑业',
            children: [
              {
                value: '5090',
                label: '其他未列明建筑业',

              }
            ]
          }
        ]
      }
    ]
  },
  {
    value: 'F',
    label: '批发和零售业',
    children: [
      {
        value: '51',
        label: '批发业',
        children: [
          {
            value: '511',
            label: '农、林、牧产品批发',
            children: [
              {
                value: '5111',
                label: '谷物、豆及薯类批发',

              },
              {
                value: '5112',
                label: '种子批发',

              },
              {
                value: '5113',
                label: '饲料批发',

              },
              {
                value: '5114',
                label: '棉、麻批发',

              },
              {
                value: '5115',
                label: '林业产品批发',

              },
              {
                value: '5116',
                label: '牲畜批发',

              },
              {
                value: '5119',
                label: '其他农牧产品批发',

              }
            ]
          },
          {
            value: '512',
            label: '食品、饮料及烟草制品批发',
            children: [
              {
                value: '5121',
                label: '米、面制品及食用油批发',

              },
              {
                value: '5122',
                label: '糕点、糖果及糖批发',

              },
              {
                value: '5123',
                label: '果品、蔬菜批发',

              },
              {
                value: '5124',
                label: '肉、禽、蛋、奶及水产品批发',

              },
              {
                value: '5125',
                label: '盐及调味品批发',

              },
              {
                value: '5126',
                label: '营养和保健品批发',

              },
              {
                value: '5127',
                label: '酒、饮料及茶叶批发',

              },
              {
                value: '5128',
                label: '烟草制品批发',

              },
              {
                value: '5129',
                label: '其他食品批发',

              }
            ]
          },
          {
            value: '513',
            label: '纺织、服装及家庭用品批发',
            children: [
              {
                value: '5131',
                label: '纺织品、针织品及原料批发',

              },
              {
                value: '5132',
                label: '服装批发',

              },
              {
                value: '5133',
                label: '鞋帽批发',

              },
              {
                value: '5134',
                label: '化妆品及卫生用品批发',

              },
              {
                value: '5135',
                label: '厨房、卫生间用具及日用杂货批发',

              },
              {
                value: '5136',
                label: '灯具、装饰物品批发',

              },
              {
                value: '5137',
                label: '家用电器批发',

              },
              {
                value: '5139',
                label: '其他家庭用品批发',

              }
            ]
          },
          {
            value: '514',
            label: '文化、体育用品及器材批发',
            children: [
              {
                value: '5141',
                label: '文具用品批发',

              },
              {
                value: '5142',
                label: '体育用品及器材批发',

              },
              {
                value: '5143',
                label: '图书批发',

              },
              {
                value: '5144',
                label: '报刊批发',

              },
              {
                value: '5145',
                label: '音像制品及电子出版物批发',

              },
              {
                value: '5146',
                label: '首饰、工艺品及收藏品批发',

              },
              {
                value: '5149',
                label: '其他文化用品批发',

              }
            ]
          },
          {
            value: '515',
            label: '医药及医疗器材批发',
            children: [
              {
                value: '5151',
                label: '西药批发',

              },
              {
                value: '5152',
                label: '中药批发',

              },
              {
                value: '5153',
                label: '医疗用品及器材批发',

              }
            ]
          },
          {
            value: '516',
            label: '矿产品、建材及化工产品批发',
            children: [
              {
                value: '5161',
                label: '煤炭及制品批发',

              },
              {
                value: '5162',
                label: '石油及制品批发',

              },
              {
                value: '5163',
                label: '非金属矿及制品批发',

              },
              {
                value: '5164',
                label: '金属及金属矿批发',

              },
              {
                value: '5165',
                label: '建材批发',

              },
              {
                value: '5166',
                label: '化肥批发',

              },
              {
                value: '5167',
                label: '农药批发',

              },
              {
                value: '5168',
                label: '农用薄膜批发',

              },
              {
                value: '5169',
                label: '其他化工产品批发',

              }
            ]
          },
          {
            value: '517',
            label: '机械设备、五金产品及电子产品批发',
            children: [
              {
                value: '5171',
                label: '农业机械批发',

              },
              {
                value: '5172',
                label: '汽车批发',

              },
              {
                value: '5173',
                label: '汽车零配件批发',

              },
              {
                value: '5174',
                label: '摩托车及零配件批发',

              },
              {
                value: '5175',
                label: '五金产品批发',

              },
              {
                value: '5176',
                label: '电气设备批发',

              },
              {
                value: '5177',
                label: '计算机、软件及辅助设备批发',

              },
              {
                value: '5178',
                label: '通讯及广播电视设备批发',

              },
              {
                value: '5179',
                label: '其他机械设备及电子产品批发',

              }
            ]
          },
          {
            value: '518',
            label: '贸易经纪与代理',
            children: [
              {
                value: '5181',
                label: '贸易代理',

              },
              {
                value: '5182',
                label: '拍卖',

              },
              {
                value: '5189',
                label: '其他贸易经纪与代理',

              }
            ]
          },
          {
            value: '519',
            label: '其他批发业',
            children: [
              {
                value: '5191',
                label: '再生物资回收与批发',

              },
              {
                value: '5199',
                label: '其他未列明批发业',

              }
            ]
          }
        ]
      },
      {
        value: '52',
        label: '零售业',
        children: [
          {
            value: '521',
            label: '综合零售',
            children: [
              {
                value: '5211',
                label: '百货零售',

              },
              {
                value: '5212',
                label: '超级市场零售',

              },
              {
                value: '5219',
                label: '其他综合零售',

              }
            ]
          },
          {
            value: '522',
            label: '食品、饮料及烟草制品专门零售',
            children: [
              {
                value: '5221',
                label: '粮油零售',

              },
              {
                value: '5222',
                label: '糕点、面包零售',

              },
              {
                value: '5223',
                label: '果品、蔬菜零售',

              },
              {
                value: '5224',
                label: '肉、禽、蛋、奶及水产品零售',

              },
              {
                value: '5225',
                label: '营养和保健品零售',

              },
              {
                value: '5226',
                label: '酒、饮料及茶叶零售',

              },
              {
                value: '5227',
                label: '烟草制品零售',

              },
              {
                value: '5229',
                label: '其他食品零售',

              }
            ]
          },
          {
            value: '523',
            label: '纺织、服装及日用品专门零售',
            children: [
              {
                value: '5231',
                label: '纺织品及针织品零售',

              },
              {
                value: '5232',
                label: '服装零售',

              },
              {
                value: '5233',
                label: '鞋帽零售',

              },
              {
                value: '5234',
                label: '化妆品及卫生用品零售',

              },
              {
                value: '5235',
                label: '钟表、眼镜零售',

              },
              {
                value: '5236',
                label: '箱、包零售',

              },
              {
                value: '5237',
                label: '厨房用具及日用杂品零售',

              },
              {
                value: '5238',
                label: '自行车零售',

              },
              {
                value: '5239',
                label: '其他日用品零售',

              }
            ]
          },
          {
            value: '524',
            label: '文化、体育用品及器材专门零售',
            children: [
              {
                value: '5241',
                label: '文具用品零售',

              },
              {
                value: '5242',
                label: '体育用品及器材零售',

              },
              {
                value: '5243',
                label: '图书、报刊零售',

              },
              {
                value: '5244',
                label: '音像制品及电子出版物零售',

              },
              {
                value: '5245',
                label: '珠宝首饰零售',

              },
              {
                value: '5246',
                label: '工艺美术品及收藏品零售',

              },
              {
                value: '5247',
                label: '乐器零售',

              },
              {
                value: '5248',
                label: '照相器材零售',

              },
              {
                value: '5249',
                label: '其他文化用品零售',

              }
            ]
          },
          {
            value: '525',
            label: '医药及医疗器材专门零售',
            children: [
              {
                value: '5251',
                label: '药品零售',

              },
              {
                value: '5252',
                label: '医疗用品及器材零售',

              }
            ]
          },
          {
            value: '526',
            label: '汽车、摩托车、燃料及零配件专门零售',
            children: [
              {
                value: '5261',
                label: '汽车零售',

              },
              {
                value: '5262',
                label: '汽车零配件零售',

              },
              {
                value: '5263',
                label: '摩托车及零配件零售',

              },
              {
                value: '5264',
                label: '机动车燃料零售',

              }
            ]
          },
          {
            value: '527',
            label: '家用电器及电子产品专门零售',
            children: [
              {
                value: '5271',
                label: '家用视听设备零售',

              },
              {
                value: '5272',
                label: '日用家电设备零售',

              },
              {
                value: '5273',
                label: '计算机、软件及辅助设备零售',

              },
              {
                value: '5274',
                label: '通信设备零售',

              },
              {
                value: '5279',
                label: '其他电子产品零售',

              }
            ]
          },
          {
            value: '528',
            label: '五金、家具及室内装饰材料专门零售',
            children: [
              {
                value: '5281',
                label: '五金零售',

              },
              {
                value: '5282',
                label: '灯具零售',

              },
              {
                value: '5283',
                label: '家具零售',

              },
              {
                value: '5284',
                label: '涂料零售',

              },
              {
                value: '5285',
                label: '卫生洁具零售',

              },
              {
                value: '5286',
                label: '木质装饰材料零售',

              },
              {
                value: '5287',
                label: '陶瓷、石材装饰材料零售',

              },
              {
                value: '5289',
                label: '其他室内装饰材料零售',

              }
            ]
          },
          {
            value: '529',
            label: '货摊、无店铺及其他零售业',
            children: [
              {
                value: '5291',
                label: '货摊食品零售',

              },
              {
                value: '5292',
                label: '货摊纺织、服装及鞋零售',

              },
              {
                value: '5293',
                label: '货摊日用品零售',

              },
              {
                value: '5294',
                label: '互联网零售',

              },
              {
                value: '5295',
                label: '邮购及电视、电话零售',

              },
              {
                value: '5296',
                label: '旧货零售',

              },
              {
                value: '5297',
                label: '生活用燃料零售',

              },
              {
                value: '5299',
                label: '其他未列明零售业',

              }
            ]
          }
        ]
      }
    ]
  },
  {
    value: 'G',
    label: '交通运输、仓储和邮政业',
    children: [
      {
        value: '53',
        label: '铁路运输业',
        children: [
          {
            value: '531',
            label: '铁路旅客运输',
            children: [
              {
                value: '5310',
                label: '铁路旅客运输',

              }
            ]
          },
          {
            value: '532',
            label: '铁路货物运输',
            children: [
              {
                value: '5320',
                label: '铁路货物运输',

              }
            ]
          },
          {
            value: '533',
            label: '铁路运输辅助活动',
            children: [
              {
                value: '5331',
                label: '客运火车站',

              },
              {
                value: '5332',
                label: '货运火车站',

              },
              {
                value: '5339',
                label: '其他铁路运输辅助活动',

              }
            ]
          }
        ]
      },
      {
        value: '54',
        label: '道路运输业',
        children: [
          {
            value: '541',
            label: '城市公共交通运输',
            children: [
              {
                value: '5411',
                label: '公共电汽车客运',

              },
              {
                value: '5412',
                label: '城市轨道交通',

              },
              {
                value: '5413',
                label: '出租车客运',

              },
              {
                value: '5419',
                label: '其他城市公共交通运输',

              }
            ]
          },
          {
            value: '542',
            label: '公路旅客运输',
            children: [
              {
                value: '5420',
                label: '公路旅客运输',

              }
            ]
          },
          {
            value: '543',
            label: '道路货物运输',
            children: [
              {
                value: '5430',
                label: '道路货物运输',

              }
            ]
          },
          {
            value: '544',
            label: '道路运输辅助活动',
            children: [
              {
                value: '5441',
                label: '客运汽车站',

              },
              {
                value: '5442',
                label: '公路管理与养护',

              },
              {
                value: '5449',
                label: '其他道路运输辅助活动',

              }
            ]
          }
        ]
      },
      {
        value: '55',
        label: '水上运输业',
        children: [
          {
            value: '551',
            label: '水上旅客运输',
            children: [
              {
                value: '5511',
                label: '海洋旅客运输',

              },
              {
                value: '5512',
                label: '内河旅客运输',

              },
              {
                value: '5513',
                label: '客运轮渡运输',

              }
            ]
          },
          {
            value: '552',
            label: '水上货物运输',
            children: [
              {
                value: '5521',
                label: '远洋货物运输',

              },
              {
                value: '5522',
                label: '沿海货物运输',

              },
              {
                value: '5523',
                label: '内河货物运输',

              }
            ]
          },
          {
            value: '553',
            label: '水上运输辅助活动',
            children: [
              {
                value: '5531',
                label: '客运港口',

              },
              {
                value: '5532',
                label: '货运港口',

              },
              {
                value: '5539',
                label: '其他水上运输辅助活动',

              }
            ]
          }
        ]
      },
      {
        value: '56',
        label: '航空运输业',
        children: [
          {
            value: '561',
            label: '航空客货运输',
            children: [
              {
                value: '5611',
                label: '航空旅客运输',

              },
              {
                value: '5612',
                label: '航空货物运输',

              }
            ]
          },
          {
            value: '562',
            label: '通用航空服务',
            children: [
              {
                value: '5620',
                label: '通用航空服务',

              }
            ]
          },
          {
            value: '563',
            label: '航空运输辅助活动',
            children: [
              {
                value: '5631',
                label: '机场',

              },
              {
                value: '5632',
                label: '空中交通管理',

              },
              {
                value: '5639',
                label: '其他航空运输辅助活动',

              }
            ]
          }
        ]
      },
      {
        value: '57',
        label: '管道运输业',
        children: [
          {
            value: '570',
            label: '管道运输业',
            children: [
              {
                value: '5700',
                label: '管道运输业',

              }
            ]
          }
        ]
      },
      {
        value: '58',
        label: '装卸搬运和运输代理业',
        children: [
          {
            value: '581',
            label: '装卸搬运',
            children: [
              {
                value: '5810',
                label: '装卸搬运',

              }
            ]
          },
          {
            value: '582',
            label: '运输代理业',
            children: [
              {
                value: '5821',
                label: '货物运输代理',

              },
              {
                value: '5822',
                label: '旅客票务代理',

              },
              {
                value: '5829',
                label: '其他运输代理业',

              }
            ]
          }
        ]
      },
      {
        value: '59',
        label: '仓储业',
        children: [
          {
            value: '591',
            label: '谷物、棉花等农产品仓储',
            children: [
              {
                value: '5911',
                label: '谷物仓储',

              },
              {
                value: '5912',
                label: '棉花仓储',

              },
              {
                value: '5919',
                label: '其他农产品仓储',

              }
            ]
          },
          {
            value: '599',
            label: '其他仓储业',
            children: [
              {
                value: '5990',
                label: '其他仓储业',

              }
            ]
          }
        ]
      },
      {
        value: '60',
        label: '邮政业',
        children: [
          {
            value: '601',
            label: '邮政基本服务',
            children: [
              {
                value: '6010',
                label: '邮政基本服务',

              }
            ]
          },
          {
            value: '602',
            label: '快递服务',
            children: [
              {
                value: '6020',
                label: '快递服务',

              }
            ]
          }
        ]
      }
    ]
  },
  {
    value: 'H',
    label: '住宿和餐饮业',
    children: [
      {
        value: '61',
        label: '住宿业',
        children: [
          {
            value: '611',
            label: '旅游饭店',
            children: [
              {
                value: '6110',
                label: '旅游饭店',

              }
            ]
          },
          {
            value: '612',
            label: '一般旅馆',
            children: [
              {
                value: '6120',
                label: '一般旅馆',

              }
            ]
          },
          {
            value: '619',
            label: '其他住宿业',
            children: [
              {
                value: '6190',
                label: '其他住宿业',

              }
            ]
          }
        ]
      },
      {
        value: '62',
        label: '餐饮业',
        children: [
          {
            value: '621',
            label: '正餐服务',
            children: [
              {
                value: '6210',
                label: '正餐服务',

              }
            ]
          },
          {
            value: '622',
            label: '快餐服务',
            children: [
              {
                value: '6220',
                label: '快餐服务',

              }
            ]
          },
          {
            value: '623',
            label: '饮料及冷饮服务',
            children: [
              {
                value: '6231',
                label: '茶馆服务',

              },
              {
                value: '6232',
                label: '咖啡馆服务',

              },
              {
                value: '6233',
                label: '酒吧服务',

              },
              {
                value: '6239',
                label: '其他饮料及冷饮服务',

              }
            ]
          },
          {
            value: '629',
            label: '其他餐饮业',
            children: [
              {
                value: '6291',
                label: '小吃服务',

              },
              {
                value: '6292',
                label: '餐饮配送服务',

              },
              {
                value: '6299',
                label: '其他未列明餐饮业',

              }
            ]
          }
        ]
      }
    ]
  },
  {
    value: 'I',
    label: '信息传输、软件和信息技术服务业',
    children: [
      {
        value: '63',
        label: '电信、广播电视和卫星传输服务',
        children: [
          {
            value: '631',
            label: '电信',
            children: [
              {
                value: '6311',
                label: '固定电信服务',

              },
              {
                value: '6312',
                label: '移动电信服务',

              },
              {
                value: '6319',
                label: '其他电信服务',

              }
            ]
          },
          {
            value: '632',
            label: '广播电视传输服务',
            children: [
              {
                value: '6321',
                label: '有线广播电视传输服务',

              },
              {
                value: '6322',
                label: '无线广播电视传输服务',

              }
            ]
          },
          {
            value: '633',
            label: '卫星传输服务',
            children: [
              {
                value: '6330',
                label: '卫星传输服务',

              }
            ]
          }
        ]
      },
      {
        value: '64',
        label: '互联网和相关服务',
        children: [
          {
            value: '641',
            label: '互联网接入及相关服务',
            children: [
              {
                value: '6410',
                label: '互联网接入及相关服务',

              }
            ]
          },
          {
            value: '642',
            label: '互联网信息服务',
            children: [
              {
                value: '6420',
                label: '互联网信息服务',

              }
            ]
          },
          {
            value: '649',
            label: '其他互联网服务',
            children: [
              {
                value: '6490',
                label: '其他互联网服务',

              }
            ]
          }
        ]
      },
      {
        value: '65',
        label: '软件和信息技术服务业',
        children: [
          {
            value: '651',
            label: '软件开发',
            children: [
              {
                value: '6510',
                label: '软件开发',

              }
            ]
          },
          {
            value: '652',
            label: '信息系统集成服务',
            children: [
              {
                value: '6520',
                label: '信息系统集成服务',

              }
            ]
          },
          {
            value: '653',
            label: '信息技术咨询服务',
            children: [
              {
                value: '6530',
                label: '信息技术咨询服务',

              }
            ]
          },
          {
            value: '654',
            label: '数据处理和存储服务',
            children: [
              {
                value: '6540',
                label: '数据处理和存储服务',

              }
            ]
          },
          {
            value: '655',
            label: '集成电路设计',
            children: [
              {
                value: '6550',
                label: '集成电路设计',

              }
            ]
          },
          {
            value: '659',
            label: '其他信息技术服务业',
            children: [
              {
                value: '6591',
                label: '数字内容服务',

              },
              {
                value: '6592',
                label: '呼叫中心',

              },
              {
                value: '6599',
                label: '其他未列明信息技术服务业',

              }
            ]
          }
        ]
      }
    ]
  },
  {
    value: 'J',
    label: '金融业',
    children: [
      {
        value: '66',
        label: '货币金融服务',
        children: [
          {
            value: '661',
            label: '中央银行服务',
            children: [
              {
                value: '6610',
                label: '中央银行服务',

              }
            ]
          },
          {
            value: '662',
            label: '货币银行服务',
            children: [
              {
                value: '6620',
                label: '货币银行服务',

              }
            ]
          },
          {
            value: '663',
            label: '非货币银行服务',
            children: [
              {
                value: '6631',
                label: '金融租赁服务',

              },
              {
                value: '6632',
                label: '财务公司',

              },
              {
                value: '6633',
                label: '典当',

              },
              {
                value: '6639',
                label: '其他非货币银行服务',

              }
            ]
          },
          {
            value: '664',
            label: '银行监管服务',
            children: [
              {
                value: '6640',
                label: '银行监管服务',

              }
            ]
          }
        ]
      },
      {
        value: '67',
        label: '资本市场服务',
        children: [
          {
            value: '671',
            label: '证券市场服务',
            children: [
              {
                value: '6711',
                label: '证券市场管理服务',

              },
              {
                value: '6712',
                label: '证券经纪交易服务',

              },
              {
                value: '6713',
                label: '基金管理服务',

              }
            ]
          },
          {
            value: '672',
            label: '期货市场服务',
            children: [
              {
                value: '6721',
                label: '期货市场管理服务',

              },
              {
                value: '6729',
                label: '其他期货市场服务',

              }
            ]
          },
          {
            value: '673',
            label: '证券期货监管服务',
            children: [
              {
                value: '6730',
                label: '证券期货监管服务',

              }
            ]
          },
          {
            value: '674',
            label: '资本投资服务',
            children: [
              {
                value: '6740',
                label: '资本投资服务',

              }
            ]
          },
          {
            value: '679',
            label: '其他资本市场服务',
            children: [
              {
                value: '6790',
                label: '其他资本市场服务',

              }
            ]
          }
        ]
      },
      {
        value: '68',
        label: '保险业',
        children: [
          {
            value: '681',
            label: '人身保险',
            children: [
              {
                value: '6811',
                label: '人寿保险',

              },
              {
                value: '6812',
                label: '健康和意外保险',

              }
            ]
          },
          {
            value: '682',
            label: '财产保险',
            children: [
              {
                value: '6820',
                label: '财产保险',

              }
            ]
          },
          {
            value: '683',
            label: '再保险',
            children: [
              {
                value: '6830',
                label: '再保险',

              }
            ]
          },
          {
            value: '684',
            label: '养老金',
            children: [
              {
                value: '6840',
                label: '养老金',

              }
            ]
          },
          {
            value: '685',
            label: '保险经纪与代理服务',
            children: [
              {
                value: '6850',
                label: '保险经纪与代理服务',

              }
            ]
          },
          {
            value: '686',
            label: '保险监管服务',
            children: [
              {
                value: '6860',
                label: '保险监管服务',

              }
            ]
          },
          {
            value: '689',
            label: '其他保险活动',
            children: [
              {
                value: '6891',
                label: '风险和损失评估',

              },
              {
                value: '6899',
                label: '其他未列明保险活动',

              }
            ]
          }
        ]
      },
      {
        value: '69',
        label: '其他金融业',
        children: [
          {
            value: '691',
            label: '金融信托与管理服务',
            children: [
              {
                value: '6910',
                label: '金融信托与管理服务',

              }
            ]
          },
          {
            value: '692',
            label: '控股公司服务',
            children: [
              {
                value: '6920',
                label: '控股公司服务',

              }
            ]
          },
          {
            value: '693',
            label: '非金融机构支付服务',
            children: [
              {
                value: '6930',
                label: '非金融机构支付服务',

              }
            ]
          },
          {
            value: '694',
            label: '金融信息服务',
            children: [
              {
                value: '6940',
                label: '金融信息服务',

              }
            ]
          },
          {
            value: '699',
            label: '其他未列明金融业',
            children: [
              {
                value: '6990',
                label: '其他未列明金融业',

              }
            ]
          }
        ]
      }
    ]
  },
  {
    value: 'K',
    label: '房地产业',
    children: [
      {
        value: '70',
        label: '房地产业',
        children: [
          {
            value: '701',
            label: '房地产开发经营',
            children: [
              {
                value: '7010',
                label: '房地产开发经营',

              }
            ]
          },
          {
            value: '702',
            label: '物业管理',
            children: [
              {
                value: '7020',
                label: '物业管理',

              }
            ]
          },
          {
            value: '703',
            label: '房地产中介服务',
            children: [
              {
                value: '7030',
                label: '房地产中介服务',

              }
            ]
          },
          {
            value: '704',
            label: '自有房地产经营活动',
            children: [
              {
                value: '7040',
                label: '自有房地产经营活动',

              }
            ]
          },
          {
            value: '709',
            label: '其他房地产业',
            children: [
              {
                value: '7090',
                label: '其他房地产业',

              }
            ]
          }
        ]
      }
    ]
  },
  {
    value: 'L',
    label: '租赁和商务服务业',
    children: [
      {
        value: '71',
        label: '租赁业',
        children: [
          {
            value: '711',
            label: '机械设备租赁',
            children: [
              {
                value: '7111',
                label: '汽车租赁',

              },
              {
                value: '7112',
                label: '农业机械租赁',

              },
              {
                value: '7113',
                label: '建筑工程机械与设备租赁',

              },
              {
                value: '7114',
                label: '计算机及通讯设备租赁',

              },
              {
                value: '7119',
                label: '其他机械与设备租赁',

              }
            ]
          },
          {
            value: '712',
            label: '文化及日用品出租',
            children: [
              {
                value: '7121',
                label: '娱乐及体育设备出租',

              },
              {
                value: '7122',
                label: '图书出租',

              },
              {
                value: '7123',
                label: '音像制品出租',

              },
              {
                value: '7129',
                label: '其他文化及日用品出租',

              }
            ]
          }
        ]
      },
      {
        value: '72',
        label: '商务服务业',
        children: [
          {
            value: '721',
            label: '企业管理服务',
            children: [
              {
                value: '7211',
                label: '企业总部管理',

              },
              {
                value: '7212',
                label: '投资与资产管理',

              },
              {
                value: '7213',
                label: '单位后勤管理服务',

              },
              {
                value: '7219',
                label: '其他企业管理服务',

              }
            ]
          },
          {
            value: '722',
            label: '法律服务',
            children: [
              {
                value: '7221',
                label: '律师及相关法律服务',

              },
              {
                value: '7222',
                label: '公证服务',

              },
              {
                value: '7229',
                label: '其他法律服务',

              }
            ]
          },
          {
            value: '723',
            label: '咨询与调查',
            children: [
              {
                value: '7231',
                label: '会计、审计及税务服务',

              },
              {
                value: '7232',
                label: '市场调查',

              },
              {
                value: '7233',
                label: '社会经济咨询',

              },
              {
                value: '7239',
                label: '其他专业咨询',

              }
            ]
          },
          {
            value: '724',
            label: '广告业',
            children: [
              {
                value: '7240',
                label: '广告业',

              }
            ]
          },
          {
            value: '725',
            label: '知识产权服务',
            children: [
              {
                value: '7250',
                label: '知识产权服务',

              }
            ]
          },
          {
            value: '726',
            label: '人力资源服务',
            children: [
              {
                value: '7261',
                label: '公共就业服务',

              },
              {
                value: '7262',
                label: '职业中介服务',

              },
              {
                value: '7263',
                label: '劳务派遣服务',

              },
              {
                value: '7269',
                label: '其他人力资源服务',

              }
            ]
          },
          {
            value: '727',
            label: '旅行社及相关服务',
            children: [
              {
                value: '7271',
                label: '旅行社服务',

              },
              {
                value: '7272',
                label: '旅游管理服务',

              },
              {
                value: '7279',
                label: '其他旅行社相关服务',

              }
            ]
          },
          {
            value: '728',
            label: '安全保护服务',
            children: [
              {
                value: '7281',
                label: '安全服务',

              },
              {
                value: '7282',
                label: '安全系统监控服务',

              },
              {
                value: '7289',
                label: '其他安全保护服务',

              }
            ]
          },
          {
            value: '729',
            label: '其他商务服务业',
            children: [
              {
                value: '7291',
                label: '市场管理',

              },
              {
                value: '7292',
                label: '会议及展览服务',

              },
              {
                value: '7293',
                label: '包装服务',

              },
              {
                value: '7294',
                label: '办公服务',

              },
              {
                value: '7295',
                label: '信用服务',

              },
              {
                value: '7296',
                label: '担保服务',

              },
              {
                value: '7299',
                label: '其他未列明商务服务业',

              }
            ]
          }
        ]
      }
    ]
  },
  {
    value: 'M',
    label: '科学研究和技术服务业',
    children: [
      {
        value: '73',
        label: '研究和试验发展',
        children: [
          {
            value: '731',
            label: '自然科学研究和试验发展',
            children: [
              {
                value: '7310',
                label: '自然科学研究和试验发展',

              }
            ]
          },
          {
            value: '732',
            label: '工程和技术研究和试验发展',
            children: [
              {
                value: '7320',
                label: '工程和技术研究和试验发展',

              }
            ]
          },
          {
            value: '733',
            label: '农业科学研究和试验发展',
            children: [
              {
                value: '7330',
                label: '农业科学研究和试验发展',

              }
            ]
          },
          {
            value: '734',
            label: '医学研究和试验发展',
            children: [
              {
                value: '7340',
                label: '医学研究和试验发展',

              }
            ]
          },
          {
            value: '735',
            label: '社会人文科学研究',
            children: [
              {
                value: '7350',
                label: '社会人文科学研究',

              }
            ]
          }
        ]
      },
      {
        value: '74',
        label: '专业技术服务业',
        children: [
          {
            value: '741',
            label: '气象服务',
            children: [
              {
                value: '7410',
                label: '气象服务',

              }
            ]
          },
          {
            value: '742',
            label: '地震服务',
            children: [
              {
                value: '7420',
                label: '地震服务',

              }
            ]
          },
          {
            value: '743',
            label: '海洋服务',
            children: [
              {
                value: '7430',
                label: '海洋服务',

              }
            ]
          },
          {
            value: '744',
            label: '测绘服务',
            children: [
              {
                value: '7440',
                label: '测绘服务',

              }
            ]
          },
          {
            value: '745',
            label: '质检技术服务',
            children: [
              {
                value: '7450',
                label: '质检技术服务',

              }
            ]
          },
          {
            value: '746',
            label: '环境与生态监测',
            children: [
              {
                value: '7461',
                label: '环境保护监测',

              },
              {
                value: '7462',
                label: '生态监测',

              }
            ]
          },
          {
            value: '747',
            label: '地质勘查',
            children: [
              {
                value: '7471',
                label: '能源矿产地质勘查',

              },
              {
                value: '7472',
                label: '固体矿产地质勘查',

              },
              {
                value: '7473',
                label: '水、二氧化碳等矿产地质勘查',

              },
              {
                value: '7474',
                label: '基础地质勘查',

              },
              {
                value: '7475',
                label: '地质勘查技术服务',

              }
            ]
          },
          {
            value: '748',
            label: '工程技术',
            children: [
              {
                value: '7481',
                label: '工程管理服务',

              },
              {
                value: '7482',
                label: '工程勘察设计',

              },
              {
                value: '7483',
                label: '规划管理',

              }
            ]
          },
          {
            value: '749',
            label: '其他专业技术服务业',
            children: [
              {
                value: '7491',
                label: '专业化设计服务',

              },
              {
                value: '7492',
                label: '摄影扩印服务',

              },
              {
                value: '7493',
                label: '兽医服务',

              },
              {
                value: '7499',
                label: '其他未列明专业技术服务业',

              }
            ]
          }
        ]
      },
      {
        value: '75',
        label: '科技推广和应用服务业',
        children: [
          {
            value: '751',
            label: '技术推广服务',
            children: [
              {
                value: '7511',
                label: '农业技术推广服务',

              },
              {
                value: '7512',
                label: '生物技术推广服务',

              },
              {
                value: '7513',
                label: '新材料技术推广服务',

              },
              {
                value: '7514',
                label: '节能技术推广服务',

              },
              {
                value: '7519',
                label: '其他技术推广服务',

              }
            ]
          },
          {
            value: '752',
            label: '科技中介服务',
            children: [
              {
                value: '7520',
                label: '科技中介服务',

              }
            ]
          },
          {
            value: '759',
            label: '其他科技推广和应用服务业',
            children: [
              {
                value: '7590',
                label: '其他科技推广和应用服务业',

              }
            ]
          }
        ]
      }
    ]
  },
  {
    value: 'N',
    label: '水利、环境和公共设施管理业',
    children: [
      {
        value: '76',
        label: '水利管理业',
        children: [
          {
            value: '761',
            label: '防洪除涝设施管理',
            children: [
              {
                value: '7610',
                label: '防洪除涝设施管理',

              }
            ]
          },
          {
            value: '762',
            label: '水资源管理',
            children: [
              {
                value: '7620',
                label: '水资源管理',

              }
            ]
          },
          {
            value: '763',
            label: '天然水收集与分配',
            children: [
              {
                value: '7630',
                label: '天然水收集与分配',

              }
            ]
          },
          {
            value: '764',
            label: '水文服务',
            children: [
              {
                value: '7640',
                label: '水文服务',

              }
            ]
          },
          {
            value: '769',
            label: '其他水利管理业',
            children: [
              {
                value: '7690',
                label: '其他水利管理业',

              }
            ]
          }
        ]
      },
      {
        value: '77',
        label: '生态保护和环境治理业',
        children: [
          {
            value: '771',
            label: '生态保护',
            children: [
              {
                value: '7711',
                label: '自然保护区管理',

              },
              {
                value: '7712',
                label: '野生动物保护',

              },
              {
                value: '7713',
                label: '野生植物保护',

              },
              {
                value: '7719',
                label: '其他自然保护',

              }
            ]
          },
          {
            value: '772',
            label: '环境治理业',
            children: [
              {
                value: '7721',
                label: '水污染治理',

              },
              {
                value: '7722',
                label: '大气污染治理',

              },
              {
                value: '7723',
                label: '固体废物治理',

              },
              {
                value: '7724',
                label: '危险废物治理',

              },
              {
                value: '7725',
                label: '放射性废物治理',

              },
              {
                value: '7729',
                label: '其他污染治理',

              }
            ]
          }
        ]
      },
      {
        value: '78',
        label: '公共设施管理业',
        children: [
          {
            value: '781',
            label: '市政设施管理',
            children: [
              {
                value: '7810',
                label: '市政设施管理',

              }
            ]
          },
          {
            value: '782',
            label: '环境卫生管理',
            children: [
              {
                value: '7820',
                label: '环境卫生管理',

              }
            ]
          },
          {
            value: '783',
            label: '城乡市容管理',
            children: [
              {
                value: '7830',
                label: '城乡市容管理',

              }
            ]
          },
          {
            value: '784',
            label: '绿化管理',
            children: [
              {
                value: '7840',
                label: '绿化管理',

              }
            ]
          },
          {
            value: '785',
            label: '公园和游览景区管理',
            children: [
              {
                value: '7851',
                label: '公园管理',

              },
              {
                value: '7852',
                label: '游览景区管理',

              }
            ]
          }
        ]
      }
    ]
  },
  {
    value: 'O',
    label: '居民服务、修理和其他服务业',
    children: [
      {
        value: '79',
        label: '居民服务业',
        children: [
          {
            value: '791',
            label: '家庭服务',
            children: [
              {
                value: '7910',
                label: '家庭服务',

              }
            ]
          },
          {
            value: '792',
            label: '托儿所服务',
            children: [
              {
                value: '7920',
                label: '托儿所服务',

              }
            ]
          },
          {
            value: '793',
            label: '洗染服务',
            children: [
              {
                value: '7930',
                label: '洗染服务',

              }
            ]
          },
          {
            value: '794',
            label: '理发及美容服务',
            children: [
              {
                value: '7940',
                label: '理发及美容服务',

              }
            ]
          },
          {
            value: '795',
            label: '洗浴服务',
            children: [
              {
                value: '7950',
                label: '洗浴服务',

              }
            ]
          },
          {
            value: '796',
            label: '保健服务',
            children: [
              {
                value: '7960',
                label: '保健服务',

              }
            ]
          },
          {
            value: '797',
            label: '婚姻服务',
            children: [
              {
                value: '7970',
                label: '婚姻服务',

              }
            ]
          },
          {
            value: '798',
            label: '殡葬服务',
            children: [
              {
                value: '7980',
                label: '殡葬服务',

              }
            ]
          },
          {
            value: '799',
            label: '其他居民服务业',
            children: [
              {
                value: '7990',
                label: '其他居民服务业',

              }
            ]
          }
        ]
      },
      {
        value: '80',
        label: '机动车、电子产品和日用产品修理业',
        children: [
          {
            value: '801',
            label: '汽车、摩托车修理与维护',
            children: [
              {
                value: '8011',
                label: '汽车修理与维护',

              },
              {
                value: '8012',
                label: '摩托车修理与维护',

              }
            ]
          },
          {
            value: '802',
            label: '计算机和办公设备维修',
            children: [
              {
                value: '8021',
                label: '计算机和辅助设备修理',

              },
              {
                value: '8022',
                label: '通讯设备修理',

              },
              {
                value: '8029',
                label: '其他办公设备维修',

              }
            ]
          },
          {
            value: '803',
            label: '家用电器修理',
            children: [
              {
                value: '8031',
                label: '家用电子产品修理',

              },
              {
                value: '8032',
                label: '日用电器修理',

              }
            ]
          },
          {
            value: '809',
            label: '其他日用产品修理业',
            children: [
              {
                value: '8091',
                label: '自行车修理',

              },
              {
                value: '8092',
                label: '鞋和皮革修理',

              },
              {
                value: '8093',
                label: '家具和相关物品修理',

              },
              {
                value: '8099',
                label: '其他未列明日用产品修理业',

              }
            ]
          }
        ]
      },
      {
        value: '81',
        label: '其他服务业',
        children: [
          {
            value: '811',
            label: '清洁服务',
            children: [
              {
                value: '8111',
                label: '建筑物清洁服务',

              },
              {
                value: '8119',
                label: '其他清洁服务',

              }
            ]
          },
          {
            value: '819',
            label: '其他未列明服务业',
            children: [
              {
                value: '8190',
                label: '其他未列明服务业',

              }
            ]
          }
        ]
      }
    ]
  },
  {
    value: 'P',
    label: '教育',
    children: [
      {
        value: '82',
        label: '教育',
        children: [
          {
            value: '821',
            label: '学前教育',
            children: [
              {
                value: '8210',
                label: '学前教育',

              }
            ]
          },
          {
            value: '822',
            label: '初等教育',
            children: [
              {
                value: '8221',
                label: '普通小学教育',

              },
              {
                value: '8222',
                label: '成人小学教育',

              }
            ]
          },
          {
            value: '823',
            label: '中等教育',
            children: [
              {
                value: '8231',
                label: '普通初中教育',

              },
              {
                value: '8232',
                label: '职业初中教育',

              },
              {
                value: '8233',
                label: '成人初中教育',

              },
              {
                value: '8234',
                label: '普通高中教育',

              },
              {
                value: '8235',
                label: '成人高中教育',

              },
              {
                value: '8236',
                label: '中等职业学校教育',

              }
            ]
          },
          {
            value: '824',
            label: '高等教育',
            children: [
              {
                value: '8241',
                label: '普通高等教育',

              },
              {
                value: '8242',
                label: '成人高等教育',

              }
            ]
          },
          {
            value: '825',
            label: '特殊教育',
            children: [
              {
                value: '8250',
                label: '特殊教育',

              }
            ]
          },
          {
            value: '829',
            label: '技能培训、教育辅助及其他教育',
            children: [
              {
                value: '8291',
                label: '职业技能培训',

              },
              {
                value: '8292',
                label: '体校及体育培训',

              },
              {
                value: '8293',
                label: '文化艺术培训',

              },
              {
                value: '8294',
                label: '教育辅助服务',

              },
              {
                value: '8299',
                label: '其他未列明教育',

              }
            ]
          }
        ]
      }
    ]
  },
  {
    value: 'Q',
    label: '卫生和社会工作',
    children: [
      {
        value: '83',
        label: '卫生',
        children: [
          {
            value: '831',
            label: '医院',
            children: [
              {
                value: '8311',
                label: '综合医院',

              },
              {
                value: '8312',
                label: '中医医院',

              },
              {
                value: '8313',
                label: '中西医结合医院',

              },
              {
                value: '8314',
                label: '民族医院',

              },
              {
                value: '8315',
                label: '专科医院',

              },
              {
                value: '8316',
                label: '疗养院',

              }
            ]
          },
          {
            value: '832',
            label: '社区医疗与卫生院',
            children: [
              {
                value: '8321',
                label: '社区卫生服务中心（站）',

              },
              {
                value: '8322',
                label: '街道卫生院',

              },
              {
                value: '8323',
                label: '乡镇卫生院',

              }
            ]
          },
          {
            value: '833',
            label: '门诊部（所）',
            children: [
              {
                value: '8330',
                label: '门诊部（所）',

              }
            ]
          },
          {
            value: '834',
            label: '计划生育技术服务活动',
            children: [
              {
                value: '8340',
                label: '计划生育技术服务活动',

              }
            ]
          },
          {
            value: '835',
            label: '妇幼保健院（所、站）',
            children: [
              {
                value: '8350',
                label: '妇幼保健院（所、站）',

              }
            ]
          },
          {
            value: '836',
            label: '专科疾病防治院（所、站）',
            children: [
              {
                value: '8360',
                label: '专科疾病防治院（所、站）',

              }
            ]
          },
          {
            value: '837',
            label: '疾病预防控制中心',
            children: [
              {
                value: '8370',
                label: '疾病预防控制中心',

              }
            ]
          },
          {
            value: '839',
            label: '其他卫生活动',
            children: [
              {
                value: '8390',
                label: '其他卫生活动',

              }
            ]
          }
        ]
      },
      {
        value: '84',
        label: '社会工作',
        children: [
          {
            value: '841',
            label: '提供住宿社会工作',
            children: [
              {
                value: '8411',
                label: '干部休养所',

              },
              {
                value: '8412',
                label: '护理机构服务',

              },
              {
                value: '8413',
                label: '精神康复服务',

              },
              {
                value: '8414',
                label: '老年人、残疾人养护服务',

              },
              {
                value: '8415',
                label: '孤残儿童收养和庇护服务',

              },
              {
                value: '8419',
                label: '其他提供住宿社会救助',

              }
            ]
          },
          {
            value: '842',
            label: '不提供住宿社会工作',
            children: [
              {
                value: '8421',
                label: '社会看护与帮助服务',

              },
              {
                value: '8429',
                label: '其他不提供住宿社会工作',

              }
            ]
          }
        ]
      }
    ]
  },
  {
    value: 'R',
    label: '文化、体育和娱乐业',
    children: [
      {
        value: '85',
        label: '新闻和出版业',
        children: [
          {
            value: '851',
            label: '新闻业',
            children: [
              {
                value: '8510',
                label: '新闻业',

              }
            ]
          },
          {
            value: '852',
            label: '出版业',
            children: [
              {
                value: '8521',
                label: '图书出版',

              },
              {
                value: '8522',
                label: '报纸出版',

              },
              {
                value: '8523',
                label: '期刊出版',

              },
              {
                value: '8524',
                label: '音像制品出版',

              },
              {
                value: '8525',
                label: '电子出版物出版',

              },
              {
                value: '8529',
                label: '其他出版业',

              }
            ]
          }
        ]
      },
      {
        value: '86',
        label: '广播、电视、电影和影视录音制作业',
        children: [
          {
            value: '861',
            label: '广播',
            children: [
              {
                value: '8610',
                label: '广播',

              }
            ]
          },
          {
            value: '862',
            label: '电视',
            children: [
              {
                value: '8620',
                label: '电视',

              }
            ]
          },
          {
            value: '863',
            label: '电影和影视节目制作',
            children: [
              {
                value: '8630',
                label: '电影和影视节目制作',

              }
            ]
          },
          {
            value: '864',
            label: '电影和影视节目发行',
            children: [
              {
                value: '8640',
                label: '电影和影视节目发行',

              }
            ]
          },
          {
            value: '865',
            label: '电影放映',
            children: [
              {
                value: '8650',
                label: '电影放映',

              }
            ]
          },
          {
            value: '866',
            label: '录音制作',
            children: [
              {
                value: '8660',
                label: '录音制作',

              }
            ]
          }
        ]
      },
      {
        value: '87',
        label: '文化艺术业',
        children: [
          {
            value: '871',
            label: '文艺创作与表演',
            children: [
              {
                value: '8710',
                label: '文艺创作与表演',

              }
            ]
          },
          {
            value: '872',
            label: '艺术表演场馆',
            children: [
              {
                value: '8720',
                label: '艺术表演场馆',

              }
            ]
          },
          {
            value: '873',
            label: '图书馆与档案馆',
            children: [
              {
                value: '8731',
                label: '图书馆',

              },
              {
                value: '8732',
                label: '档案馆',

              }
            ]
          },
          {
            value: '874',
            label: '文物及非物质文化遗产保护',
            children: [
              {
                value: '8740',
                label: '文物及非物质文化遗产保护',

              }
            ]
          },
          {
            value: '875',
            label: '博物馆',
            children: [
              {
                value: '8750',
                label: '博物馆',

              }
            ]
          },
          {
            value: '876',
            label: '烈士陵园、纪念馆',
            children: [
              {
                value: '8760',
                label: '烈士陵园、纪念馆',

              }
            ]
          },
          {
            value: '877',
            label: '群众文化活动',
            children: [
              {
                value: '8770',
                label: '群众文化活动',

              }
            ]
          },
          {
            value: '879',
            label: '其他文化艺术业',
            children: [
              {
                value: '8790',
                label: '其他文化艺术业',

              }
            ]
          }
        ]
      },
      {
        value: '88',
        label: '体育',
        children: [
          {
            value: '881',
            label: '体育组织',
            children: [
              {
                value: '8810',
                label: '体育组织',

              }
            ]
          },
          {
            value: '882',
            label: '体育场馆',
            children: [
              {
                value: '8820',
                label: '体育场馆',

              }
            ]
          },
          {
            value: '883',
            label: '休闲健身活动',
            children: [
              {
                value: '8830',
                label: '休闲健身活动',

              }
            ]
          },
          {
            value: '889',
            label: '其他体育',
            children: [
              {
                value: '8890',
                label: '其他体育',

              }
            ]
          }
        ]
      },
      {
        value: '89',
        label: '娱乐业',
        children: [
          {
            value: '891',
            label: '室内娱乐活动',
            children: [
              {
                value: '8911',
                label: '歌舞厅娱乐活动',

              },
              {
                value: '8912',
                label: '电子游艺厅娱乐活动',

              },
              {
                value: '8913',
                label: '网吧活动',

              },
              {
                value: '8919',
                label: '其他室内娱乐活动',

              }
            ]
          },
          {
            value: '892',
            label: '游乐园',
            children: [
              {
                value: '8920',
                label: '游乐园',

              }
            ]
          },
          {
            value: '893',
            label: '彩票活动',
            children: [
              {
                value: '8930',
                label: '彩票活动',

              }
            ]
          },
          {
            value: '894',
            label: '文化、娱乐、体育经纪代理',
            children: [
              {
                value: '8941',
                label: '文化娱乐经纪人',

              },
              {
                value: '8942',
                label: '体育经纪人',

              },
              {
                value: '8949',
                label: '其他文化艺术经纪代理',

              }
            ]
          },
          {
            value: '899',
            label: '其他娱乐业',
            children: [
              {
                value: '8990',
                label: '其他娱乐业',

              }
            ]
          }
        ]
      }
    ]
  },
  {
    value: 'S',
    label: '公共管理、社会保障和社会组织',
    children: [
      {
        value: '90',
        label: '中国共产党机关',
        children: [
          {
            value: '900',
            label: '中国共产党机关',
            children: [
              {
                value: '9000',
                label: '中国共产党机关',

              }
            ]
          }
        ]
      },
      {
        value: '91',
        label: '国家机构',
        children: [
          {
            value: '911',
            label: '国家权力机构',
            children: [
              {
                value: '9110',
                label: '国家权力机构',

              }
            ]
          },
          {
            value: '912',
            label: '国家行政机构',
            children: [
              {
                value: '9121',
                label: '综合事务管理机构',

              },
              {
                value: '9122',
                label: '对外事务管理机构',

              },
              {
                value: '9123',
                label: '公共安全管理机构',

              },
              {
                value: '9124',
                label: '社会事务管理机构',

              },
              {
                value: '9125',
                label: '经济事务管理机构',

              },
              {
                value: '9126',
                label: '行政监督检查机构',

              }
            ]
          },
          {
            value: '913',
            label: '人民法院和人民检察院',
            children: [
              {
                value: '9131',
                label: '人民法院',

              },
              {
                value: '9132',
                label: '人民检察院',

              }
            ]
          },
          {
            value: '919',
            label: '其他国家机构',
            children: [
              {
                value: '9190',
                label: '其他国家机构',

              }
            ]
          }
        ]
      },
      {
        value: '92',
        label: '人民政协、民主党派',
        children: [
          {
            value: '921',
            label: '人民政协',
            children: [
              {
                value: '9210',
                label: '人民政协',

              }
            ]
          },
          {
            value: '922',
            label: '民主党派',
            children: [
              {
                value: '9220',
                label: '民主党派',

              }
            ]
          }
        ]
      },
      {
        value: '93',
        label: '社会保障',
        children: [
          {
            value: '930',
            label: '社会保障',
            children: [
              {
                value: '9300',
                label: '社会保障',

              }
            ]
          }
        ]
      },
      {
        value: '94',
        label: '群众团体、社会团体和其他成员组织',
        children: [
          {
            value: '941',
            label: '群众团体',
            children: [
              {
                value: '9411',
                label: '工会',

              },
              {
                value: '9412',
                label: '妇联',

              },
              {
                value: '9413',
                label: '共青团',

              },
              {
                value: '9419',
                label: '其他群众团体',

              }
            ]
          },
          {
            value: '942',
            label: '社会团体',
            children: [
              {
                value: '9421',
                label: '专业性团体',

              },
              {
                value: '9422',
                label: '行业性团体',

              },
              {
                value: '9429',
                label: '其他社会团体',

              }
            ]
          },
          {
            value: '943',
            label: '基金会',
            children: [
              {
                value: '9430',
                label: '基金会',

              }
            ]
          },
          {
            value: '944',
            label: '宗教组织',
            children: [
              {
                value: '9440',
                label: '宗教组织',

              }
            ]
          }
        ]
      },
      {
        value: '95',
        label: '基层群众自治组织',
        children: [
          {
            value: '951',
            label: '社区自治组织',
            children: [
              {
                value: '9510',
                label: '社区自治组织',

              }
            ]
          },
          {
            value: '952',
            label: '村民自治组织',
            children: [
              {
                value: '9520',
                label: '村民自治组织',

              }
            ]
          }
        ]
      }
    ]
  },
  {
    value: 'T',
    label: '国际组织',
    children: [
      {
        value: '96',
        label: '国际组织',
        children: [
          {
            value: '960',
            label: '国际组织',
            children: [
              {
                value: '9600',
                label: '国际组织',

              }
            ]
          }
        ]
      }
    ]
  }
]

exports.originalIndustry = industry
