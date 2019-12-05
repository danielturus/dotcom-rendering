import React from 'react';
import { css, cx } from 'emotion';

import { headline } from '@guardian/src-foundations/typography';
import { palette } from '@guardian/src-foundations';

import { QuoteIcon } from '@root/src/web/components/QuoteIcon';
import { Kicker } from '@root/src/web/components/Kicker';

const fontStyles = (size: SmallHeadlineSize) => css`
    ${headline[size]()};
`;

const textDecorationUnderline = css`
    text-decoration: underline;
`;

const linkStyles = css`
    position: relative;

    color: inherit;

    text-decoration: none;
    :hover {
        text-decoration: underline;
    }
`;

const visitedStyles = (visitedColour: string) => css`
    :visited {
        color: ${visitedColour};
    }
`;

export const LinkHeadline = ({
    headlineText,
    pillar,
    showUnderline = false,
    kicker,
    showQuotes = false,
    size = 'xxsmall',
    link,
}: LinkHeadlineType) => (
    <h4 className={fontStyles(size)}>
        {kicker && (
            <Kicker
                text={kicker.text}
                pillar={pillar}
                showPulsingDot={kicker.showPulsingDot}
                showSlash={kicker.showSlash}
            />
        )}
        {showQuotes && <QuoteIcon colour={palette[pillar].main} size={size} />}
        {link ? (
            // We were passed a link object so headline should be a link, with link styling
            <a
                className={cx(
                    // Composed styles - order matters for colours
                    linkStyles,
                    showUnderline && textDecorationUnderline,
                    link.visitedColour && visitedStyles(link.visitedColour),
                )}
                href={link.to}
                // If link.preventFocus is true, set tabIndex to -1 to ensure this
                // link is not tabbed to. Useful if there is an outer link to the same
                // place, such as with MostViewed
                tabIndex={link.preventFocus ? -1 : undefined}
            >
                {headlineText}
            </a>
        ) : (
            // We don't have a link so simply use a span here
            <span>{headlineText}</span>
        )}
    </h4>
);