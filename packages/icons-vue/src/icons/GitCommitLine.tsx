// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import GitCommitLineSvg from '@airclass/icons-svg/lib/asn/GitCommitLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const GitCommitLine = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={GitCommitLineSvg}></AntdIcon>;
};

GitCommitLine.displayName = 'GitCommitLine';
GitCommitLine.inheritAttrs = false;
export default GitCommitLine;