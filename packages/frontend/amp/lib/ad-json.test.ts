import { adJson } from './ad-json';

const paramSet: AdTargetParam[] = [
    {
        name: 'su',
        values: ['4', '5', '1', '2', '3'],
    },
    {
        name: 'url',
        values: [
            '/business/2019/feb/07/no-deal-brexit-uk-exporters-risk-being-locked-out-of-world-harbours',
        ],
    },
    {
        name: 'tn',
        values: ['news'],
    },
    {
        name: 'ct',
        values: ['article'],
    },
    {
        name: 'p',
        values: ['ng'],
    },
    {
        name: 'co',
        values: ['richard-partington'],
    },
    {
        name: 'k',
        values: [
            'asia-pacific',
            'politics',
            'business',
            'uk/uk',
            'eu',
            'newzealand',
            'world',
            'europe-news',
            'internationaltrade',
            'foreignpolicy',
            'australia-news',
            'eu-referendum',
            'global-economy',
            'japan',
            'economics',
            'south-korea',
        ],
    },
    {
        name: 'edition',
        values: ['au'],
    },
    {
        name: 'sh',
        values: ['https://gu.com/p/akj3n'],
    },
];

describe('ampadslots', () => {
    it('should set platform to amp', () => {
        const edition = 'UK';
        const targetings: EditionAdTargeting = {
            paramSet,
            edition: 'UK',
        };
        const res = adJson(edition, [targetings]);
        const p = res.targeting.find(param => param.name === 'p');
        if (p === undefined) {
            return fail();
        }

        expect(p.value).toBe('amp');
    });
});