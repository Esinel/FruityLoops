export type Collectible = {
    id: string,
    label: string,
    points: number,
    totalPoints: number,
    totalBonusPoints: number,
    count: number,
    selected: number,
    config: {
      color: string,
      bonus: {
        trigger: number,
        points: number
      } | null
    } 
}