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
      }
    ]
  }
]

exports.originalIndustry = industry
