// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import GitMergeLineSvg from '@airclass/icons-svg/lib/asn/GitMergeLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const GitMergeLine = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={GitMergeLineSvg}></AntdIcon>;
};

GitMergeLine.displayName = 'GitMergeLine';
GitMergeLine.inheritAttrs = false;
export default GitMergeLine;