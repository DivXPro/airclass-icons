// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import ArticleLineSvg from '@airclass/icons-svg/lib/asn/ArticleLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const ArticleLine = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ArticleLineSvg}></AntdIcon>;
};

ArticleLine.displayName = 'ArticleLine';
ArticleLine.inheritAttrs = false;
export default ArticleLine;