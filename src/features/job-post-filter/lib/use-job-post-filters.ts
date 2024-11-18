import { useState } from 'react'

import { FilterValue } from 'shared/ui'

import { JobPostFilter } from '../model/filter'

const defaultFilters: JobPostFilter = {
  locations: [],
  studentTypes: [],
}

type Props = {
  defaultFilters?: JobPostFilter
}

export const useJobPostFilters = ({
  defaultFilters: defaultFilterProp,
}: Props) => {
  const [filters, setFilters] = useState<JobPostFilter>(
    defaultFilterProp ?? defaultFilters,
  )

  const isFilterExist =
    [...filters.locations, ...filters.studentTypes].length > 0

  const updateLocationFilter = (updatedLocations: FilterValue[]) => {
    setFilters(prev => ({
      ...prev,
      locations: updatedLocations,
    }))
  }

  const updateStudentTypeFilter = (updatedStudentTypes: FilterValue[]) => {
    setFilters(prev => ({
      ...prev,
      studentTypes: updatedStudentTypes,
    }))
  }

  const removeLocationFilter = (locationToBeRemoved: FilterValue) => {
    setFilters(prev => ({
      ...prev,
      locations: prev.locations.filter(
        location => location !== locationToBeRemoved,
      ),
    }))
  }

  const removeStudentTypeFilter = (studentTypeToBeRemoved: FilterValue) => {
    setFilters(prev => ({
      ...prev,
      studentTypes: prev.studentTypes.filter(
        studentType => studentType !== studentTypeToBeRemoved,
      ),
    }))
  }

  const resetFilters = () => setFilters(defaultFilters)

  return {
    filters,
    isFilterExist,
    updateLocationFilter,
    updateStudentTypeFilter,
    removeLocationFilter,
    removeStudentTypeFilter,
    resetFilters,
  }
}