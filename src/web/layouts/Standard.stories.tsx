import React, { useEffect } from 'react';

import { makeGuardianBrowserCAPI } from '@root/src/model/window-guardian';
import { Article } from '@root/fixtures/articles/Article';
import { AdvertisementFeature } from '@root/fixtures/articles/AdvertisementFeature';
import { PhotoEssay } from '@root/fixtures/articles/PhotoEssay';
import { Review } from '@root/fixtures/articles/Review';
import { Analysis } from '@root/fixtures/articles/Analysis';
import { Feature } from '@root/fixtures/articles/Feature';
import { GuardianView } from '@root/fixtures/articles/GuardianView';
import { Interview } from '@root/fixtures/articles/Interview';
import { Quiz } from '@root/fixtures/articles/Quiz';
import { Recipe } from '@root/fixtures/articles/Recipe';
import { Comment } from '@root/fixtures/articles/Comment';
import { MatchReport } from '@root/fixtures/articles/MatchReport';

import { NAV } from '@root/fixtures/NAV';

import { HydrateApp } from '@root/src/web/components/HydrateApp';
import { mockRESTCalls } from '@root/src/web/lib/mockRESTCalls';

import { DecideLayout } from './DecideLayout';

mockRESTCalls();

export default {
    title: 'Layouts/Standard',
    parameters: {
        chromatic: { viewports: [1300], delay: 800, diffThreshold: 0.2 },
    },
};

const convertToStandard = (CAPI: CAPIType) => {
    return {
        ...CAPI,
        pageType: {
            ...CAPI.pageType,
            hasShowcaseMainElement: false,
        },
        isImmersive: false,
    };
};

// HydratedLayout is used here to simulated the hydration that happens after we init react on
// the client. We need a separate component so that we can make use of useEffect to ensure
// the hydrate step only runs once the dom has been rendered.
const HydratedLayout = ({ ServerCAPI }: { ServerCAPI: CAPIType }) => {
    useEffect(() => {
        const CAPI = makeGuardianBrowserCAPI(ServerCAPI);
        HydrateApp({ CAPI, NAV });
    }, [ServerCAPI]);
    return <DecideLayout CAPI={ServerCAPI} NAV={NAV} />;
};

export const ArticleStory = () => {
    const ServerCAPI = convertToStandard(Article);
    return <HydratedLayout ServerCAPI={ServerCAPI} />;
};
ArticleStory.story = { name: 'Article' };

export const ReviewStory = () => {
    const ServerCAPI = convertToStandard(Review);
    return <HydratedLayout ServerCAPI={ServerCAPI} />;
};
ReviewStory.story = { name: 'Review' };

export const CommentStory = () => {
    const ServerCAPI = convertToStandard(Comment);
    return <HydratedLayout ServerCAPI={ServerCAPI} />;
};
CommentStory.story = { name: 'Comment' };

export const AdvertisementFeatureStory = () => {
    const ServerCAPI = convertToStandard(AdvertisementFeature);
    return <HydratedLayout ServerCAPI={ServerCAPI} />;
};
AdvertisementFeatureStory.story = { name: 'AdvertisementFeature' };

export const PhotoEssayStory = () => {
    const ServerCAPI = convertToStandard(PhotoEssay);
    return <HydratedLayout ServerCAPI={ServerCAPI} />;
};
PhotoEssayStory.story = { name: 'PhotoEssay' };

export const AnalysisStory = () => {
    const ServerCAPI = convertToStandard(Analysis);
    return <HydratedLayout ServerCAPI={ServerCAPI} />;
};
AnalysisStory.story = {
    name: 'Analysis',
    parameters: {
        viewport: { defaultViewport: 'mobileMedium' },
        chromatic: { viewports: [480] },
    },
};

export const FeatureStory = () => {
    const ServerCAPI = convertToStandard(Feature);
    return <HydratedLayout ServerCAPI={ServerCAPI} />;
};
FeatureStory.story = { name: 'Feature' };

export const GuardianViewStory = () => {
    const ServerCAPI = convertToStandard(GuardianView);
    return <HydratedLayout ServerCAPI={ServerCAPI} />;
};
GuardianViewStory.story = {
    name: 'GuardianView',
    parameters: {
        viewport: { defaultViewport: 'phablet' },
        chromatic: { viewports: [660] },
    },
};

export const InterviewStory = () => {
    const ServerCAPI = convertToStandard(Interview);
    return <HydratedLayout ServerCAPI={ServerCAPI} />;
};
InterviewStory.story = {
    name: 'Interview',
    parameters: {
        viewport: { defaultViewport: 'desktop' },
        chromatic: { viewports: [980] },
    },
};

export const QuizStory = () => {
    const ServerCAPI = convertToStandard(Quiz);
    return <HydratedLayout ServerCAPI={ServerCAPI} />;
};
QuizStory.story = {
    name: 'Quiz',
    parameters: {
        viewport: { defaultViewport: 'desktop' },
        chromatic: { viewports: [1300] },
    },
};

export const RecipeStory = () => {
    const ServerCAPI = convertToStandard(Recipe);
    return <HydratedLayout ServerCAPI={ServerCAPI} />;
};
RecipeStory.story = {
    name: 'Recipe',
    parameters: {
        viewport: { defaultViewport: 'mobileMedium' },
        chromatic: { viewports: [375] },
    },
};

export const MatchReportStory = () => {
    const ServerCAPI = convertToStandard(MatchReport);
    return <HydratedLayout ServerCAPI={ServerCAPI} />;
};
MatchReportStory.story = { name: 'MatchReport' };
