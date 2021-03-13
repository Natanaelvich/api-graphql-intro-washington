import AccountCadastroService from '@/services/AccountCadastroService';
import AccountListService from '@/services/AccountListService';
import ContatoCadastroService from '@/services/ContatoCadastroService';
import ContatoListService from '@/services/ContatoListService';
import GithubService from '@/services/GithubService';
import UserCadastroService from '@/services/UserCadastroService';
import UserListService from '@/services/UserListService';

export default () => ({
  githubService: GithubService,
  contatoCadastroService: ContatoCadastroService,
  contatoListService: ContatoListService,
  userCadastroService: UserCadastroService,
  userListService: UserListService,
  accountCadastroService: AccountCadastroService,
  accountListService: AccountListService,
});
