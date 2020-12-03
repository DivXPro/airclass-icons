// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import ArticleFillSvg from '@airclass/icons-svg/lib/asn/ArticleFill';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const ArticleFill = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ArticleFillSvg}></AntdIcon>;
};

ArticleFill.displayName = 'ArticleFill';
ArticleFill.inheritAttrs = false;
export default ArticleFill;