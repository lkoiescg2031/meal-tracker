import { Food } from '@/models/food'
import { gram, url } from '@/models/types'

export interface Serving {
	id?: number
	food: Food
	serving: gram
}

export enum MealType {
	MEAL = 'meal',
	SNACK = 'snack',
}

export interface Meal {
	id?: number
	title: string
	time: Date
	type: MealType
	description?: string
	img?: url
	servings: Serving[]
}
