// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import GitBranchLineSvg from '@airclass/icons-svg/lib/asn/GitBranchLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const GitBranchLine = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={GitBranchLineSvg}></AntdIcon>;
};

GitBranchLine.displayName = 'GitBranchLine';
GitBranchLine.inheritAttrs = false;
export default GitBranchLine;