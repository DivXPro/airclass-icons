// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import GitCommitFillSvg from '@airclass/icons-svg/lib/asn/GitCommitFill';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const GitCommitFill = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={GitCommitFillSvg}></AntdIcon>;
};

GitCommitFill.displayName = 'GitCommitFill';
GitCommitFill.inheritAttrs = false;
export default GitCommitFill;