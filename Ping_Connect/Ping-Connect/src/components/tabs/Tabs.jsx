import { Tab } from '@headlessui/react'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

const Tabs = ({handleTabChange,tabTypes}) => {
  return (
    <div className="w-full pb-4 bg-orange-50 dark:bg-stone-900 sm:px-0">
      <Tab.Group defaultIndex={0} onChange={handleTabChange}>
        <Tab.List className="flex p-1 space-x-1 rounded-xl dark:bg-stone-500 bg-orange-400/20">
         {tabTypes.map((tab,index)=>  <Tab key={index}
            className={({ selected }) =>
              classNames(
                'w-full rounded-lg py-2.5 text-sm font-medium leading-5',
                'ring-orange-200 hover:bg-orange-50 dark:hover:bg-stone-600 dark:ring-stone-600 dark:ring-offset-stone-600 capitalize ring-opacity-60 ring-offset-2 ring-offset-orange-200 focus:outline-none focus:ring-2',
                selected
                  ? 'bg-orange-50  text-gray-600 dark:bg-stone-800 dark:text-gray-100 shadow'
                  : '   dark:bg-stone-500  text-gray-500 dark:text-gray-300hover:text-gray-700 dark:text-gray-50'
              )
            }
          >
            {tab}
          </Tab>)}
        </Tab.List>
      </Tab.Group>
    </div>
  )
}

export default Tabs