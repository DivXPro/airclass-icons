// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import GithubFillSvg from '@airclass/icons-svg/lib/asn/GithubFill';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const GithubFill = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={GithubFillSvg}></AntdIcon>;
};

GithubFill.displayName = 'GithubFill';
GithubFill.inheritAttrs = false;
export default GithubFill;