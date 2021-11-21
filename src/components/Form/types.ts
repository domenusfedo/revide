export interface StructureData {
    link: string,
    buttonLabel: string,
    directLabel: string,
    directLink: string,
    extra: boolean
}

export interface Input {
    ref: React.RefObject<HTMLDivElement>,
    value: string,
    shadowText: string,
    iconName: string,
    type: string,
    error: string,
    mirror?: string
}

export interface SingleData {
    value: string,
    error: string,
    isValid: boolean,
    config: {
        lengthCheck?: {
            min: number,
            max: number
        },
        isAlphaNumeric?: boolean,
        isEqual?: boolean,
        isMail?: boolean,
    }
}

export interface LoginType {
    username: SingleData,
    password: SingleData,
}

export interface SigninType {
    username: SingleData,
    password: SingleData,
    confirm: SingleData,
    mail: SingleData,
}

export type InputData = SigninType | LoginType;