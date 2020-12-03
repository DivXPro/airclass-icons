// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import GitRepositoryLineSvg from '@airclass/icons-svg/lib/asn/GitRepositoryLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const GitRepositoryLine = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={GitRepositoryLineSvg}></AntdIcon>;
};

GitRepositoryLine.displayName = 'GitRepositoryLine';
GitRepositoryLine.inheritAttrs = false;
export default GitRepositoryLine;