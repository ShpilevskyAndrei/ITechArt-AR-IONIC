export interface ITabConfig {
  name: TabsEnum,
  icon: string,
  tabTo: string
}

export enum TabsEnum {
  Quests = 'Quests',
  Map = 'Map',
  Achievements = 'Achievements'
}

export const TABS: ITabConfig[] = [
  {
    name: TabsEnum.Quests,
    icon: 'grid',
    tabTo: 'camera-marker-based'
  },
  {
    name: TabsEnum.Map,
    icon: 'map',
    tabTo: 'tab2'
  },
  {
    name: TabsEnum.Achievements,
    icon: 'trophy',
    tabTo: 'tab3'
  },
]
