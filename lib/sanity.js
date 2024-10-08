import { SanityClient } from "@sanity/client";

export const client = SanityClient({
    projectId: 'lc875a4n',
    dataset: 'production',
    apiVersion: '2021-03-25',
    token: 'sk37gaVF9quDssgCh3yY8ianYO73Cg0136oeohhBXlHLvjeDcK6yqC8lR2IQ6yY5iw6PX0nmEAH495lQPtOZgnXsupM0LBCWikf1M9aGnTJWAD1sCMWFkNEXejZEZNed7Oe9Z0A7EfRuNHA4dkcTAokoRtd80xM4sFJlfjokwFQRoS3lyYSp',
    useCdn: false,
})