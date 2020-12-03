// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import RedditLineSvg from '@airclass/icons-svg/lib/asn/RedditLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const RedditLine = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={RedditLineSvg}></AntdIcon>;
};

RedditLine.displayName = 'RedditLine';
RedditLine.inheritAttrs = false;
export default RedditLine;