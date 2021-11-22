export interface ProvidedData {
    [key: string]: string
}

export interface StructureData {
    link: string,
    buttonLabel: string,
    directLabel: string,
    directLink: string,
    extra: boolean,
    loading: boolean,
    error: string | undefined,
    submitAction: (userData: ProvidedData) => void
}

export interface Data {
    ref: React.RefObject<HTMLDivElement>,
    name: string
    value: string,
    error: string,
    type: string,
    isValid: boolean,
    mirror: number | false,
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