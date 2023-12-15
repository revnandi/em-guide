import { renderReactToMjml } from "./render";

import {
  MjmlButton,
  MjmlText,
  MjmlDivider,
  MjmlHead,
  MjmlPreview,
  MjmlTitle,
  Mjml,
  MjmlBody,
  MjmlSection,
  MjmlWrapper,
} from "@faire/mjml-react";

interface CreateArticleEmailTemplateProps {
  articleTitle: string;
  createdByName: string;
  link: string;
}

export const createArticleEmailTemplate = ({
  articleTitle,
  createdByName,
  link,
}: CreateArticleEmailTemplateProps) => {
  const { html, errors } = renderReactToMjml(
    <Mjml>
      <MjmlHead>
        <MjmlTitle>EM Guide | New article created</MjmlTitle>
        <MjmlPreview>{createdByName} has created a new article...</MjmlPreview>
      </MjmlHead>
      <MjmlBody width={600}>
        <MjmlSection paddingBottom="16px">
          <MjmlText
            color="#212134"
            font-size="32px"
            font-weight="700"
            font-family="sans-serif"
            lineHeight="1.5"
            paddingBottom=" 16px"
          >
            EM Guide | New article created
          </MjmlText>
          <MjmlDivider padding="16px 0" border-width="1px" border-color="#F6F6F9" />
        </MjmlSection>
        <MjmlSection>
        <MjmlText
          line-height="1.5"
          font-size="16px"
          color="#4A4A6A"
          font-family="sans-serif"
        >
          {createdByName} has created a new article: {articleTitle}. You can
          view it by clicking the link below.
        </MjmlText>
        <MjmlWrapper padding="16px 0" fullWidth textAlign="center">
          <MjmlButton
            href={link}
            background-color="#4945FF"
            font-weight="700"
            font-size="14px"
            padding="8px 16px"
            border-right="4px"
            height="40px"
            line-height="1.5"
            textAlign="center"
            align="center"
          >
            Open article
          </MjmlButton>
        </MjmlWrapper>
        </MjmlSection>
      </MjmlBody>
    </Mjml>
  );

  return html;
};
