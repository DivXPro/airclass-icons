// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import GitMergeFillSvg from '@airclass/icons-svg/lib/asn/GitMergeFill';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const GitMergeFill = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={GitMergeFillSvg}></AntdIcon>;
};

GitMergeFill.displayName = 'GitMergeFill';
GitMergeFill.inheritAttrs = false;
export default GitMergeFill;