export type MyRow = {
    pn: string,
    fp: string,
    hs: 'l' | 'm' | 'r',
    do: string,
    di: string,
    frm: string,
    str: '-' | 'l' | 'r',
    qbs: '-' | 'p' | 'uc',
    qn: string,
    lt: string,
    lg: string,
    ct: string,
    rg: string,
    rt: string,
    tn: string,
    xn: string,
    yn: string,
    hn: string,
    zn: string,
    mp: '-' | 't' | 'x' | 'y' | 'h' | 'z',
    mt: '-'
    | 'jet'
    | 'fly'
    | 'orbit'
    | 'exit'
    | 'jet return'
    | 'fly return'
    | 'orbit return'
    | 'exit return',
    pt: '-' | 'p' | 'r' | 's',
    bs: string,
    qa: string,
    ta: string,
    xa: string,
    ya: string,
    ha: string,
    za: string,
    tt: string,
    rn: string,
    ctch: '-' | 'good' | 'bad' | 'int',
    cmt: string,
};

export type Game = {
    value: string,
    label: string,
};
