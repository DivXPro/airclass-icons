// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import GitBranchFillSvg from '@airclass/icons-svg/lib/asn/GitBranchFill';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const GitBranchFill = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={GitBranchFillSvg}></AntdIcon>;
};

GitBranchFill.displayName = 'GitBranchFill';
GitBranchFill.inheritAttrs = false;
export default GitBranchFill;