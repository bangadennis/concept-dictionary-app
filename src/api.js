import { getInstance as getD2 } from 'd2/lib/d2';

export const fetchDataElementGroups = () =>

    return getD2()
        .then((d2) => {
            return d2.models.dataElementGroups.list();
        });
};
