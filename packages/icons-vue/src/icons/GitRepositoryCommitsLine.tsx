// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import GitRepositoryCommitsLineSvg from '@airclass/icons-svg/lib/asn/GitRepositoryCommitsLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const GitRepositoryCommitsLine = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={GitRepositoryCommitsLineSvg}></AntdIcon>;
};

GitRepositoryCommitsLine.displayName = 'GitRepositoryCommitsLine';
GitRepositoryCommitsLine.inheritAttrs = false;
export default GitRepositoryCommitsLine;