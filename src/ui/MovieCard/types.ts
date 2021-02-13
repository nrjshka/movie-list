import { MovieType } from '../../models'
import React from 'react'

type MovieCardType = {
  onWatchLater: (e: React.MouseEvent<HTMLSpanElement, MouseEvent>) => void
  onLike: (e: React.MouseEvent<HTMLSpanElement, MouseEvent>) => void
} & MovieType

export type { MovieCardType }
