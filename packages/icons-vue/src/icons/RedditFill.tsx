// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import RedditFillSvg from '@airclass/icons-svg/lib/asn/RedditFill';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const RedditFill = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={RedditFillSvg}></AntdIcon>;
};

RedditFill.displayName = 'RedditFill';
RedditFill.inheritAttrs = false;
export default RedditFill;