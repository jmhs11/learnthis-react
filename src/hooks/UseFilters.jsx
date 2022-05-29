import { useState } from 'react';

const useFilters = () => {
	const [filters, setFilters] = useState({
		search: '',
		onlyActive: false,
		sortBy: 0
	});

	const setSearch = search => setFilters({ ...filters, search });
	const setOnlyActive = onlyActive => setFilters({ ...filters, onlyActive });
	const setSortBy = sortBy => setFilters({ ...filters, sortBy });

	return {
		...filters,
		setSearch,
		setOnlyActive,
		setSortBy
	};
};

export default useFilters;
