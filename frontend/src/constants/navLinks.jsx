import { HiCloudUpload, HiChartSquareBar } from 'react-icons/hi'

export const Links = [
  {
    id: 1,
    name: "Api's",
    children: [
      {
        label: 'Create Images',
        subLabel: 'Create beautiful real images!',
        href: '/dalle',
        icon: () => <HiCloudUpload size={20} color='#4299E1' />
      },
      {
        label: 'Text Completion',
        subLabel: 'Ask anything to the OpenAI!',
        href: '/help',
        icon: () => <HiChartSquareBar size={20} color='#4299E1' />
      }
    ]
  }
]
