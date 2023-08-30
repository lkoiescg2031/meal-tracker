import { gram, kcal } from '@/models/types'

export interface Food {
	id?: number
	name: string
	calorie: kcal
	carbohydrate?: gram
	protein?: gram
	fat?: gram
}
