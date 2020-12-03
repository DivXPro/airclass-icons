// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import GithubLineSvg from '@airclass/icons-svg/lib/asn/GithubLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const GithubLine = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={GithubLineSvg}></AntdIcon>;
};

GithubLine.displayName = 'GithubLine';
GithubLine.inheritAttrs = false;
export default GithubLine;